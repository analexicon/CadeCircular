import { prisma, router } from "../prismaClient";
import { BusStop } from "../types";
import {
  determineErrorResponsePrismaQuery,
  formattedBusStop,
} from "../functions";

// Query all bus stops
router.get("/bus-stop", async (request, response) => {
  try {
    const foundBusStops = await prisma.busStop.findMany();

    const formmattedResponse: BusStop[] = foundBusStops.map((busStop) => {
      return formattedBusStop(busStop);
    });

    return response.status(200).json(formmattedResponse);
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Query a single bus stop by its id
router.get("/bus-stop/:id", async (request, response) => {
  try {
    const foundBusStop = await prisma.busStop.findUnique({
      where: {
        id: request.params.id,
      },
    });

    if (foundBusStop) {
      return response.status(200).json(formattedBusStop(foundBusStop));
    } else {
      return response.status(404).json({ message: "Bus stop not found!" });
    }
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Create bus stop
router.post("/bus-stop", async (request, response) => {
  try {
    const body: BusStop = request.body;
    const newBusStop = await prisma.busStop.create({
      data: {
        name: body.name,
        description: body.description,
      },
    });
    return response.status(201).json(formattedBusStop(newBusStop));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Update bus stop
router.patch("/bus-stop/:id", async (request, response) => {
  try {
    const body: BusStop = request.body;
    const updatedBusStop = await prisma.busStop.update({
      where: {
        id: request.params.id,
      },
      data: {
        name: body.name,
        description: body.description,
      },
    });
    return response.status(200).json(formattedBusStop(updatedBusStop));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Delete bus stop
router.delete("/bus-stop/:id", async (request, response) => {
  try {
    await prisma.busStop.delete({
      where: {
        id: request.params.id,
      },
    });

    return response.status(200).json({ message: "Bus stop deleted!" });
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

export default router;
