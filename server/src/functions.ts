import {
  Prisma,
  Bus as PrismaBus,
  BusStop as PrismaBusStop,
  Driver as PrismaDriver,
  Manager as PrismaManager,
  Employee as PrismaEmployee,
  Journey as PrismaJourney,
  Route as PrismaRoute,
  Forecast as PrismaForecast,
} from "@prisma/client";
import {
  Bus,
  BusStop,
  CRUDRecordEndpoints,
  Driver,
  Employee,
  Journey,
  Manager,
  Route,
  Forecast,
} from "./types";

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

type FullPrismaManager = PrismaManager & { employee: FullPrismaEmployee };
export const formattedManager = (manager: FullPrismaManager): Manager => {
  return {
    _endpoint: CRUDRecordEndpoints.Manager,
    id: manager.employeeId,
    name: manager.employee.name,
    identification: manager.employee.identification,
    username: manager.employee.username,
    password: manager.employee.password,
  };
};

type FullPrismaRoute = PrismaRoute & {};
export const formattedRoute = (route: FullPrismaRoute): Route => {
  return {
    _endpoint: CRUDRecordEndpoints.Route,
    id: route.id,
    name: route.name,
    description: route.description,
  };
};

type FullPrismaForecast = PrismaForecast & {};
export const formattedForecast = (forecast: FullPrismaForecast): Forecast => {
  return {
    _endpoint: CRUDRecordEndpoints.Forecast,
    id: forecast.id,
    schedule: forecast.schedule,
  };
};

type FullPrismaJourney = PrismaJourney & {
  driver: FullPrismaDriver;
  bus: FullPrismaBus;
  route: FullPrismaRoute;
};
export const formattedJourney = (busStop: FullPrismaJourney): Journey => {
  return {
    id: busStop.id,
    paused: busStop.paused,
    active: busStop.active,
    startDate: busStop.startDate,
    nextBusStopIndex: busStop.nextBusStopIndex,
    driver: formattedDriver(busStop.driver),
    bus: formattedBus(busStop.bus),
    route: formattedRoute(busStop.route),
  };
};
