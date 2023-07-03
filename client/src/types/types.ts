export type CRUDRecord = Bus | BusStop | Route | Driver;
export enum CRUDRecordEndpoints {
  Bus = "bus",
  BusStop = "bus-stop",
  Route = "route",
  Driver = "driver",
}
export enum CRUDRecordTypes {
  Bus,
  BusStop,
  Route,
  Driver,
}

export interface Bus {
  _endpoint: CRUDRecordEndpoints.Bus;

  id: string;
  licensePlate: string;
  capacity: number;
  model: string;
  available: boolean;
}

export interface BusStop {
  _endpoint: CRUDRecordEndpoints.BusStop;

  id: string;
  name: string;
  description: string;
}

export interface Forecast {
  id: string;
  schedule: Date;
}

export interface Route {
  _endpoint: CRUDRecordEndpoints.Route;

  id: string;
  name: string;
  description: string;
}

export interface BusStop_Route {
  id: string;
  order: number;
}

export interface Journey {
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

export interface Employee {
  id: string;
  name: string;
  identification: string;
  username: string;
  password: string;

  // authenticate: (givenUsername: string, givenPassword: string) => boolean;
}

// if (givenUsername === this.username && givenPassword === this.password) {
//   return true;
// } else {
//   return false;
// }

export interface Driver extends Employee {
  _endpoint: CRUDRecordEndpoints.Driver;

  // TODO: Implementar métodos
  // startJourney: () => {};
  // pauseJourney: () => {};
  // finishJourney: () => {};
  // arriveBusStop: () => {};
}

export interface Manager extends Employee {
  // TODO: Implementar métodos
  // createDriver: (driver: Driver) => {};
  // createBus: () => {};
  // createBusStop: () => {};
  // createRoute: () => {};
}
