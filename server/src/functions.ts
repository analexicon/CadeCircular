import {
  Prisma,
  Bus as PrismaBus,
  BusStop as PrismaBusStop,
  Driver as PrismaDriver,
  Employee as PrismaEmployee,
} from "@prisma/client";
import { Bus, BusStop, CRUDRecordEndpoints, Driver, Employee } from "./types";
import { type } from "os";

// If an error occurs, try to determine the error type and return the apropriate response
export function determineErrorResponsePrismaQuery(error: unknown) {
  console.log(error);

  const response: {
    code: number;
    body: { message: string; prismaErrorCode?: string };
  } = {
    code: 500,
    body: { message: "Internal server error" },
  };

  if (error instanceof Prisma.PrismaClientValidationError) {
    response.code = 400;
    response.body.message = `Bad request => There was an error validating the request`;
  } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
    response.code = 400;
    response.body.message = `Bad request => `;
    response.body.prismaErrorCode = error.code;
    if (error.code === "P2002")
      response.body.message += `Unique constraint failed.`;
    else if (error.code === "P2003")
      response.body.message += `Foreign key constraint failed.`;
    else if (error.code === "P2025") {
      response.code = 404;
      response.body.message = `Record not found.`;
    } else response.body.message += "A database related error occured";
  } else if (
    error instanceof Prisma.PrismaClientRustPanicError ||
    error instanceof Prisma.PrismaClientInitializationError ||
    error instanceof Prisma.PrismaClientUnknownRequestError
  ) {
    response.body.message += ` => A database related error occured`;
  }
  response.body.message = response.code + ": " + response.body.message;
  return response;
}

type FullPrismaBus = PrismaBus & {};
export const formattedBus = (bus: FullPrismaBus): Bus => {
  return {
    _endpoint: CRUDRecordEndpoints.Bus,
    id: bus.id,
    licensePlate: bus.licensePlate,
    capacity: bus.capacity,
    model: bus.model,
    available: bus.available,
  };
};

type FullPrismaBusStop = PrismaBusStop & {};
export const formattedBusStop = (busStop: FullPrismaBusStop): BusStop => {
  return {
    _endpoint: CRUDRecordEndpoints.BusStop,
    id: busStop.id,
    name: busStop.name,
    description: busStop.description,
  };
};

type FullPrismaEmployee = PrismaEmployee & {};
export const formattedEmployee = (employee: FullPrismaEmployee): Employee => {
  return {
    id: employee.id,
    name: employee.name,
    identification: employee.identification,
    username: employee.username,
    password: employee.password,
  };
};

type FullPrismaDriver = PrismaDriver & { employee: FullPrismaEmployee };
export const formattedDriver = (driver: FullPrismaDriver): Driver => {
  return {
    _endpoint: CRUDRecordEndpoints.Driver,
    id: driver.employeeId,
    name: driver.employee.name,
    identification: driver.employee.identification,
    username: driver.employee.username,
    password: driver.employee.password,
  };
};
