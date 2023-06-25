import { prisma, router } from "../prismaClient";
import { Bus } from "../types";
import { determineErrorResponsePrismaQuery, formattedBus } from "../functions";

// Query all buses
router.get("/bus", async (request, response) => {
  try {
    const foundBuses = await prisma.bus.findMany();

    const formmattedResponse: Bus[] = foundBuses.map((bus) => {
      return formattedBus(bus);
    });

    return response.status(200).json(formmattedResponse);
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Query a single bus by its id
router.get("/bus/:id", async (request, response) => {
  try {
    const foundBus = await prisma.bus.findUnique({
      where: {
        id: request.params.id,
      },
    });

    if (foundBus) {
      return response.status(200).json(formattedBus(foundBus));
    } else {
      return response.status(404).json({ message: "Bus not found!" });
    }
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Create bus
router.post("/bus", async (request, response) => {
  try {
    const body: Bus = request.body;
    const newBus = await prisma.bus.create({
      data: {
        licensePlate: body.licensePlate,
        capacity: body.capacity,
        model: body.model,
        available: body.available,
      },
    });
    return response.status(201).json(formattedBus(newBus));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Update bus
router.patch("/bus/:id", async (request, response) => {
  try {
    const body: Bus = request.body;
    const updatedBus = await prisma.bus.update({
      where: {
        id: request.params.id,
      },
      data: {
        licensePlate: body.licensePlate,
        capacity: body.capacity,
        model: body.model,
        available: body.available,
      },
    });
    return response.status(200).json(formattedBus(updatedBus));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Delete bus
router.delete("/bus/:id", async (request, response) => {
  try {
    await prisma.bus.delete({
      where: {
        id: request.params.id,
      },
    });

    return response.status(200).json({ message: "Bus deleted!" });
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

export = router;
