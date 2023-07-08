import { prisma, router } from "../prismaClient";
import { Journey } from "../types";
import {
  determineErrorResponsePrismaQuery,
  formattedJourney,
} from "../functions";

// Query all journeys stops
router.get("/journey", async (request, response) => {
  try {
    const foundJourneys = await prisma.journey.findMany({
      include: {
        driver: { include: { employee: true } },
        bus: true,
        route: {
          include: { busStop_RouteList: { include: { forecasts: true } } },
        },
      },
    });

    const formmattedResponse: Journey[] = foundJourneys.map((journey) => {
      return formattedJourney(journey);
    });

    return response.status(200).json(formmattedResponse);
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Query a single journey stop by its id
router.get("/journey/:id", async (request, response) => {
  try {
    const foundJourney = await prisma.journey.findUnique({
      include: {
        driver: { include: { employee: true } },
        bus: true,
        route: {
          include: {
            busStop_RouteList: { include: { busStop: true, forecasts: true } },
          },
        },
      },
      where: {
        id: request.params.id,
      },
    });

    if (foundJourney) {
      return response.status(200).json(formattedJourney(foundJourney));
    } else {
      return response.status(404).json({ message: "Journey not found!" });
    }
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Create journey
router.post("/journey", async (request, response) => {
  try {
    const body: Journey = request.body;
    let driverId: string = body.driver.id;
    if (!body.driver || body.driver.id === undefined || body.driver.id === "")
      return response.status(404).json({
        message: "Could not create Journey, because Driver ID was not set!",
      });

    let busId: string = body.bus.id;
    if (!body.bus || body.bus.id === undefined || body.bus.id === "")
      return response.status(404).json({
        message: "Could not create Journey, because Bus ID was not set!",
      });

    let routeId: string = body.route.id;
    if (!body.route || body.route.id === undefined || body.route.id === "")
      return response.status(404).json({
        message: "Could not create Journey, because Route ID was not set!",
      });

    const newJourney = await prisma.journey.create({
      include: {
        driver: { include: { employee: true } },
        bus: true,
        route: {
          include: {
            busStop_RouteList: { include: { busStop: true, forecasts: true } },
          },
        },
      },
      data: {
        paused: body.paused,
        active: body.active,
        startDate: body.startDate,
        nextBusStopIndex: body.nextBusStopIndex,
        driver: { connect: { employeeId: driverId } },
        bus: { connect: { id: busId } },
        route: { connect: { id: routeId } },
      },
    });
    return response.status(201).json(formattedJourney(newJourney));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Update journey
router.patch("/journey/:id", async (request, response) => {
  try {
    const body: Journey = request.body;
    const updatedJourney = await prisma.journey.update({
      include: {
        driver: { include: { employee: true } },
        bus: true,
        route: {
          include: {
            busStop_RouteList: { include: { busStop: true, forecasts: true } },
          },
        },
      },
      where: {
        id: request.params.id,
      },
      data: {
        paused: body.paused,
        active: body.active,
        startDate: body.startDate,
        nextBusStopIndex: body.nextBusStopIndex,
      },
    });
    return response.status(200).json(formattedJourney(updatedJourney));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Delete journey
router.delete("/journey/:id", async (request, response) => {
  try {
    await prisma.journey.delete({
      where: {
        id: request.params.id,
      },
    });

    return response.status(200).json({ message: "Journey deleted!" });
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

export default router;
