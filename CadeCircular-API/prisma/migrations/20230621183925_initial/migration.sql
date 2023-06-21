-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employeeID" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Driver_employeeID_fkey" FOREIGN KEY ("employeeID") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employeeID" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Manager_employeeID_fkey" FOREIGN KEY ("employeeID") REFERENCES "Employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Bus" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "licensePlate" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "available" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BusStop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "coordinates" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Route" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "BusStop_Route" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "order" INTEGER NOT NULL,
    "busStopID" TEXT NOT NULL,
    "routeID" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BusStop_Route_busStopID_fkey" FOREIGN KEY ("busStopID") REFERENCES "BusStop" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "BusStop_Route_routeID_fkey" FOREIGN KEY ("routeID") REFERENCES "Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Forecast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "busStopRouteID" TEXT NOT NULL,
    "schedule" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Forecast_busStopRouteID_fkey" FOREIGN KEY ("busStopRouteID") REFERENCES "BusStop_Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Journey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nextBusStopID" TEXT NOT NULL,
    "busID" TEXT NOT NULL,
    "driverID" TEXT NOT NULL,
    "paused" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Journey_nextBusStopID_fkey" FOREIGN KEY ("nextBusStopID") REFERENCES "BusStop_Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Journey_busID_fkey" FOREIGN KEY ("busID") REFERENCES "Bus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Journey_driverID_fkey" FOREIGN KEY ("driverID") REFERENCES "Driver" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_username_key" ON "Employee"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_identification_key" ON "Employee"("identification");

-- CreateIndex
CREATE UNIQUE INDEX "Bus_licensePlate_key" ON "Bus"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "BusStop_name_key" ON "BusStop"("name");
