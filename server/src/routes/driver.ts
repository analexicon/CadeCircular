import { prisma, router } from "../prismaClient";
import { Driver } from "../types";
import {
  determineErrorResponsePrismaQuery,
  formattedDriver,
} from "../functions";

// Query all drivers
router.get("/driver", async (request, response) => {
  try {
    const foundDriver = await prisma.driver.findMany({
      include: { employee: true },
    });

    const formmattedResponse: Driver[] = foundDriver.map((driver) => {
      return formattedDriver(driver);
    });

    return response.status(200).json(formmattedResponse);
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Query a single driver stop by its id
router.get("/driver/:employeeId", async (request, response) => {
  try {
    const foundDriver = await prisma.driver.findUnique({
      include: { employee: true },
      where: {
        employeeId: request.params.employeeId,
      },
    });

    if (foundDriver) {
      return response.status(200).json(formattedDriver(foundDriver));
    } else {
      return response.status(404).json({ message: "Driver not found!" });
    }
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Create driver
router.post("/driver", async (request, response) => {
  try {
    const body: Driver = request.body;
    const newDriver = await prisma.driver.create({
      include: { employee: true },
      data: {
        employee: {
          create: {
            name: body.name,
            username: body.username,
            password: body.password,
            identification: body.identification,
            type: 1,
          },
        },
      },
    });
    return response.status(201).json(formattedDriver(newDriver));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Update driver
router.patch("/driver/:employeeId", async (request, response) => {
  try {
    const body: Driver = request.body;
    const updatedDriver = await prisma.driver.update({
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
    return response.status(200).json(formattedDriver(updatedDriver));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Delete driver
router.delete("/driver/:employeeId", async (request, response) => {
  try {
    await prisma.driver.delete({
      where: {
        employeeId: request.params.employeeId,
      },
      include: { employee: true },
    });

    return response.status(200).json({ message: "Bus stop deleted!" });
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

export default router;
