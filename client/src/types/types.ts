export type Record = CRUDRecord | Journey;
export type CRUDRecord = Bus | BusStop | Route | Driver | Manager;
export enum RecordTypes {
  Bus = "bus",
  BusStop = "bus-stop",
  Route = "route",
  Driver = "driver",
  Manager = "manager",
  Journey = "journey",
}

export interface Bus {
  _type: RecordTypes.Bus;

  id: string;
  licensePlate: string;
  capacity: number;
  model: string;
  available: boolean;
}

export interface BusStop {
  _type: RecordTypes.BusStop;

  id: string;
  name: string;
  description: string;

  busStop_RouteList: BusStop_Route[];
}

export interface Forecast {
  id: string;
  schedule: Date;

  busStop_Route?: BusStop_Route;
}

export interface Route {
  _type: RecordTypes.Route;

  id: string;
  name: string;
  description: string;

  busStop_RouteList: BusStop_Route[];
}

export interface BusStop_Route {
  id: string;
  order: number;

  forecasts: Forecast[];

  busStop?: BusStop;
  route?: Route;
}

export interface Journey {
  _type: RecordTypes.Journey;

  id: string;
  paused: boolean;
  active: boolean;
  startDate: Date;
  nextBusStopIndex: number;

  driver: Driver;
  bus: Bus;
  route: Route;

  // TODO: Implementar métodos
  // getCurrentBusStop: () => {};
  // getSubsequentialBusStop: () => {};
}

export enum EmployeeTypes {
  Driver = "driver",
  Manager = "manager",
}

export type Employee = Driver | Manager;

interface BaseEmployee {
  id: string;
  name: string;
  identification: string;
  username: string;
  password: string;
}

export interface Driver extends BaseEmployee {
  _type: RecordTypes.Driver;
  type: EmployeeTypes.Driver;

  // TODO: Implementar métodos
  // startJourney: () => {};
  // pauseJourney: () => {};
  // finishJourney: () => {};
  // arriveBusStop: () => {};
}

export interface Manager extends BaseEmployee {
  _type: RecordTypes.Manager;
  type: EmployeeTypes.Manager;
  // TODO: Implementar métodos
  // createDriver: (driver: Driver) => {};
  // createBus: () => {};
  // createBusStop: () => {};
  // createRoute: () => {};
}
