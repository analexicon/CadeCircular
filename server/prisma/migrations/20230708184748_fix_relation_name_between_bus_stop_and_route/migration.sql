/*
  Warnings:

  - You are about to drop the column `busStopRouteId` on the `Forecast` table. All the data in the column will be lost.
  - Added the required column `busStop_RouteId` to the `Forecast` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Forecast" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "schedule" DATETIME NOT NULL,
    "busStop_RouteId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Forecast_busStop_RouteId_fkey" FOREIGN KEY ("busStop_RouteId") REFERENCES "BusStop_Route" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Forecast" ("createdAt", "id", "schedule", "updatedAt") SELECT "createdAt", "id", "schedule", "updatedAt" FROM "Forecast";
DROP TABLE "Forecast";
ALTER TABLE "new_Forecast" RENAME TO "Forecast";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
