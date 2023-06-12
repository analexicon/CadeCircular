// Classes

export abstract class Employee {
  constructor(
    name: string,
    identification: string,
    username: string,
    password: string,
  ) {
    this.name = name;
    this.identification = identification;
    this.username = username;
    this.password = password;
  }

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
    name: string,
    identification: string,
    username: string,
    password: string,
  ) {
    super(name, identification, username, password);
  }

  // TODO: Implementar métodos
  startJourney() {}
  pauseJourney() {}
  finishJourney() {}
  arriveBusStop() {}
}

export class Manager extends Employee {
  constructor(
    name: string,
    identification: string,
    username: string,
    password: string,
  ) {
    super(name, identification, username, password);
  }

  // TODO: Implementar métodos
  createDriver(driver: Driver) {}
  createBus() {}
  createBusStop() {}
  createRoute() {}
}
