import { prisma, router } from "../prismaClient";
import { Bus } from "../types";
import { determineErrorResponsePrismaQuery, formattedBus } from "../functions";

// Query all buses
router.get("/bus", async (request, response) => {
  try {
    const foundProjects = await prisma.bus.findMany();

    const formmattedResponse: Bus[] = foundProjects.map((bus) => {
      return formattedBus(bus);
    });

    return response.status(200).json(formmattedResponse);
  } catch (error) {
    console.log(error);
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Query a single bus by its id
router.get("/bus/:id", async (request, response) => {
  try {
    const foundBus = await prisma.bus.findUnique({
      include: {},
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

export = router;
