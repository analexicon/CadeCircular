import { prisma, router } from "../prismaClient";
import { Manager } from "../types";
import {
  determineErrorResponsePrismaQuery,
  formattedManager,
} from "../functions";

// Query all managers
router.get("/manager", async (request, response) => {
  try {
    const foundManager = await prisma.manager.findMany({
      include: { employee: true },
    });

    const formmattedResponse: Manager[] = foundManager.map((manager) => {
      return formattedManager(manager);
    });

    return response.status(200).json(formmattedResponse);
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Query a single manager stop by its id
router.get("/manager/:employeeId", async (request, response) => {
  try {
    const foundManager = await prisma.manager.findUnique({
      include: { employee: true },
      where: {
        employeeId: request.params.employeeId,
      },
    });

    if (foundManager) {
      return response.status(200).json(formattedManager(foundManager));
    } else {
      return response.status(404).json({ message: "manager not found!" });
    }
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Create manager
router.post("/manager", async (request, response) => {
  try {
    const body: Manager = request.body;
    const newManager = await prisma.manager.create({
      include: { employee: true },
      data: {
        employee: {
          create: {
            name: body.name,
            username: body.username,
            password: body.password,
            identification: body.identification,
            type: 2,
          },
        },
      },
    });
    return response.status(201).json(formattedManager(newManager));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Update manager
router.patch("/manager/:employeeId", async (request, response) => {
  try {
    const body: Manager = request.body;
    const updatedManager = await prisma.manager.update({
      where: {
        employeeId: request.params.employeeId,
      },
      include: { employee: true },
      data: {
        employee: {
          update: {
            name: body.name,
            username: body.username,
            password: body.password,
            identification: body.identification,
          },
        },
      },
    });
    return response.status(200).json(formattedManager(updatedManager));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Delete manager
router.delete("/manager/:employeeId", async (request, response) => {
  try {
    await prisma.manager.delete({
      where: {
        employeeId: request.params.employeeId,
      },
      include: { employee: true },
    });

    return response.status(200).json({ message: "Manager deleted!" });
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

export default router;
