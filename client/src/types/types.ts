// TODO: Implementar relações entre classes

export class Bus {
  constructor({
    id,
    licensePlate,
    capacity,
    model,
    available,
  }: {
    id: string;
    licensePlate: string;
    capacity: number;
    model: string;
    available: boolean;
  }) {
    this.id = id;
    this.licensePlate = licensePlate;
    this.capacity = capacity;
    this.model = model;
    this.available = available;
  }

  id: string;
  licensePlate: string;
  capacity: number;
  model: string;
  available: boolean;
}

export class BusStop {
  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  id: string;
  name: string;
  description: string;
}

export class Forecast {
  constructor(id: string, schedule: Date) {
    this.id = id;
    this.schedule = schedule;
  }

  id: string;
  schedule: Date;
}

export class Route {
  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  id: string;
  name: string;
  description: string;
}

export class BusStop_Route {
  constructor(id: string, order: number) {
    this.id = id;
    this.order = order;
  }

  id: string;
  order: number;
}

export class Journey {
  constructor(
    id: string,
    paused: boolean,
    active: boolean,
    startDate: Date,
    nextBusStopIndex: number,

    driver: Driver,
    bus: Bus,
    route: Route
  ) {
    this.id = id;
    this.paused = paused;
    this.active = active;
    this.startDate = startDate;
    this.nextBusStopIndex = nextBusStopIndex;

    this.driver = driver;
    this.bus = bus;
    this.route = route;
  }

  id: string;
  paused: boolean;
  active: boolean;
  startDate: Date;
  nextBusStopIndex: number;

  driver: Driver;
  bus: Bus;
  route: Route;

  // TODO: Implementar métodos
  getCurrentBusStop() {}
  getSubsequentialBusStop() {}
}

export abstract class Employee {
  constructor(
    id: string,
    name: string,
    identification: string,
    username: string,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.identification = identification;
    this.username = username;
    this.password = password;
  }

  id: string;
  name: string;
  identification: string;
  username: string;
  password: string;

  authenticate(givenUsername: string, givenPassword: string) {
    if (givenUsername === this.username && givenPassword === this.password) {
      return true;
    } else {
      return false;
    }
  }
}

export class Driver extends Employee {
  constructor(
    id: string,
    name: string,
    identification: string,
    username: string,
    password: string
  ) {
    super(id, name, identification, username, password);
  }

  // TODO: Implementar métodos
  startJourney() {}
  pauseJourney() {}
  finishJourney() {}
  arriveBusStop() {}
}

export class Manager extends Employee {
  constructor(
    id: string,
    name: string,
    identification: string,
    username: string,
    password: string
  ) {
    super(id, name, identification, username, password);
  }

  // TODO: Implementar métodos
  createDriver(driver: Driver) {}
  createBus() {}
  createBusStop() {}
  createRoute() {}
}

export type CRUDRecord = Bus | BusStop | Route | Driver;
export enum CRUDRecordEndpoints {
  Bus = "bus",
  BusStop = "bus-stop",
  Route = "route",
  Driver = "driver",
}
