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
  BusStop_Route as PrismaBusStop_Route,
} from "@prisma/client";
import {
  RecordTypes,
  Bus,
  BusStop,
  Driver,
  Employee,
  Journey,
  Manager,
  Route,
  Forecast,
  BusStop_Route,
  EmployeeTypes,
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
    _type: RecordTypes.Bus,
    id: bus.id,
    licensePlate: bus.licensePlate,
    capacity: bus.capacity,
    model: bus.model,
    available: bus.available,
  };
};

type FullPrismaBusStop = PrismaBusStop & {
  busStop_RouteList?: FullPrismaBusStop_Route[];
};
export const formattedBusStop = (busStop: FullPrismaBusStop): BusStop => {
  return {
    _type: RecordTypes.BusStop,
    id: busStop.id,
    name: busStop.name,
    description: busStop.description,
    busStop_RouteList: busStop.busStop_RouteList
      ? busStop.busStop_RouteList.map((busStop_Route) => {
          return formattedBusStop_Route(busStop_Route);
        })
      : [],
  };
};

type FullPrismaBusStop_Route = PrismaBusStop_Route & {
  busStop?: FullPrismaBusStop;
  forecasts: FullPrismaForecast[];
};
export const formattedBusStop_Route = (
  busStop_Route: FullPrismaBusStop_Route
): BusStop_Route => {
  const objectToReturn: BusStop_Route = {
    id: busStop_Route.id,
    order: busStop_Route.order,
    forecasts: busStop_Route.forecasts.map((forecast) => {
      return formattedForecast(forecast);
    }),
  };
  if (busStop_Route.busStop) {
    objectToReturn.busStop = formattedBusStop(busStop_Route.busStop);
  }
  return objectToReturn;
};

type FullPrismaEmployee = PrismaEmployee & {};
// export const formattedEmployee = (employee: FullPrismaEmployee): Employee => {
//   return {
//     id: employee.id,
//     name: employee.name,
//     identification: employee.identification,
//     username: employee.username,
//     password: employee.password,
//   };
// };

type FullPrismaDriver = PrismaDriver & { employee: FullPrismaEmployee };
export const formattedDriver = (driver: FullPrismaDriver): Driver => {
  return {
    _type: RecordTypes.Driver,
    type: EmployeeTypes.Driver,
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
    type: EmployeeTypes.Manager,
    id: manager.employeeId,
    name: manager.employee.name,
    identification: manager.employee.identification,
    username: manager.employee.username,
    password: manager.employee.password,
  };
};

type FullPrismaRoute = PrismaRoute & {
  busStop_RouteList: FullPrismaBusStop_Route[];
};
export const formattedRoute = (route: FullPrismaRoute): Route => {
  return {
    _type: RecordTypes.Route,
    id: route.id,
    name: route.name,
    description: route.description,
    busStop_RouteList: route.busStop_RouteList.map((busStop_Route) => {
      return formattedBusStop_Route(busStop_Route);
    }),
  };
};

type FullPrismaForecast = PrismaForecast & {
  busStop_Route?: FullPrismaBusStop_Route;
};
export const formattedForecast = (forecast: FullPrismaForecast): Forecast => {
  const objectToReturn: Forecast = {
    id: forecast.id,
    schedule: forecast.schedule,
  };
  if (forecast.busStop_Route) {
    objectToReturn.busStop_Route = formattedBusStop_Route(
      forecast.busStop_Route
    );
  }
  return objectToReturn;
};

type FullPrismaJourney = PrismaJourney & {
  driver: FullPrismaDriver;
  bus: FullPrismaBus;
  route: FullPrismaRoute;
};
export const formattedJourney = (busStop: FullPrismaJourney): Journey => {
  return {
    _type: RecordTypes.Journey,
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
