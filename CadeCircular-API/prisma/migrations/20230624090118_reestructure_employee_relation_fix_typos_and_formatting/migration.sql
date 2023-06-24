/*
  Warnings:

  - The primary key for the `Manager` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employeeID` on the `Manager` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Manager` table. All the data in the column will be lost.
  - You are about to drop the column `coordinates` on the `BusStop` table. All the data in the column will be lost.
  - You are about to drop the column `reference` on the `BusStop` table. All the data in the column will be lost.
  - The primary key for the `Driver` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `employeeID` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Driver` table. All the data in the column will be lost.
  - You are about to drop the column `busStopRouteID` on the `Forecast` table. All the data in the column will be lost.
  - You are about to drop the column `busID` on the `Journey` table. All the data in the column will be lost.
  - You are about to drop the column `driverID` on the `Journey` table. All the data in the column will be lost.
  - You are about to drop the column `nextBusStopID` on the `Journey` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `busStopID` on the `BusStop_Route` table. All the data in the column will be lost.
  - You are about to drop the column `routeID` on the `BusStop_Route` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `Manager` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `BusStop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Employee` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `busStopRouteId` to the `Forecast` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Journey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `busId` to the `Journey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `driverId` to the `Journey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nextBusStopIndex` to the `Journey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `routeId` to the `Journey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Journey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `busStopId` to the `BusStop_Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `routeId` to the `BusStop_Route` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Manager" (
    "employeeId" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Manager_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Manager" ("createdAt", "updatedAt") SELECT "createdAt", "updatedAt" FROM "Manager";
DROP TABLE "Manager";
ALTER TABLE "new_Manager" RENAME TO "Manager";
CREATE TABLE "new_BusStop" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_BusStop" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "BusStop";
DROP TABLE "BusStop";
ALTER TABLE "new_BusStop" RENAME TO "BusStop";
CREATE UNIQUE INDEX "BusStop_name_key" ON "BusStop"("name");
CREATE TABLE "new_Employee" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Employee" ("createdAt", "id", "identification", "name", "password", "updatedAt", "username") SELECT "createdAt", "id", "identification", "name", "password", "updatedAt", "username" FROM "Employee";
DROP TABLE "Employee";
ALTER TABLE "new_Employee" RENAME TO "Employee";
CREATE UNIQUE INDEX "Employee_username_key" ON "Employee"("username");
CREATE UNIQUE INDEX "Employee_identification_key" ON "Employee"("identification");
CREATE TABLE "new_Driver" (
    "employeeId" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Driver_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Driver" ("createdAt", "updatedAt") SELECT "createdAt", "updatedAt" FROM "Driver";
DROP TABLE "Driver";
ALTER TABLE "new_Driver" RENAME TO "Driver";
CREATE TABLE "new_Forecast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schedule" DATETIME NOT NULL,
    "busStopRouteId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Forecast_busStopRouteId_fkey" FOREIGN KEY ("busStopRouteId") REFERENCES "BusStop_Route" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Forecast" ("createdAt", "id", "schedule", "updatedAt") SELECT "createdAt", "id", "schedule", "updatedAt" FROM "Forecast";
DROP TABLE "Forecast";
ALTER TABLE "new_Forecast" RENAME TO "Forecast";
CREATE TABLE "new_Journey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "paused" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,
    "startDate" DATETIME NOT NULL,
    "nextBusStopIndex" INTEGER NOT NULL,
    "driverId" TEXT NOT NULL,
    "busId" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Journey_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver" ("employeeId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Journey_busId_fkey" FOREIGN KEY ("busId") REFERENCES "Bus" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Journey_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Journey" ("createdAt", "id", "paused", "updatedAt") SELECT "createdAt", "id", "paused", "updatedAt" FROM "Journey";
DROP TABLE "Journey";
ALTER TABLE "new_Journey" RENAME TO "Journey";
CREATE TABLE "new_Route" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Route" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
CREATE TABLE "new_BusStop_Route" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "order" INTEGER NOT NULL,
    "busStopId" TEXT NOT NULL,
    "routeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "BusStop_Route_busStopId_fkey" FOREIGN KEY ("busStopId") REFERENCES "BusStop" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "BusStop_Route_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_BusStop_Route" ("createdAt", "id", "order", "updatedAt") SELECT "createdAt", "id", "order", "updatedAt" FROM "BusStop_Route";
DROP TABLE "BusStop_Route";
ALTER TABLE "new_BusStop_Route" RENAME TO "BusStop_Route";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
