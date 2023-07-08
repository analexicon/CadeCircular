import { prisma, router } from "../prismaClient";
import { Route } from "../types";
import {
  determineErrorResponsePrismaQuery,
  formattedRoute,
} from "../functions";

// Query all routes
router.get("/route", async (request, response) => {
  try {
    const foundRoutes = await prisma.route.findMany({
      include: {
        busStop_RouteList: {
          include: { busStop: true, forecasts: true },
        },
      },
    });

    const formmattedResponse: Route[] = foundRoutes.map((route) => {
      return formattedRoute(route);
    });

    return response.status(200).json(formmattedResponse);
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Query a single route by its id
router.get("/route/:id", async (request, response) => {
  try {
    const foundRoute = await prisma.route.findUnique({
      include: {
        busStop_RouteList: {
          include: { busStop: true, forecasts: true },
        },
      },
      where: {
        id: request.params.id,
      },
    });

    if (foundRoute) {
      return response.status(200).json(formattedRoute(foundRoute));
    } else {
      return response.status(404).json({ message: "Route not found!" });
    }
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Create route
//TODO criar relacao entre os pontos
router.post("/route", async (request, response) => {
  try {
    const body: Route = request.body;
    const newRoute = await prisma.route.create({
      include: {
        busStop_RouteList: {
          include: { busStop: true, forecasts: true },
        },
      },
      data: {
        name: body.name,
        description: body.description,
      },
    });
    return response.status(201).json(formattedRoute(newRoute));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Update route
router.patch("/route/:id", async (request, response) => {
  try {
    const body: Route = request.body;
    const updatedRoute = await prisma.route.update({
      include: {
        busStop_RouteList: {
          include: { busStop: true, forecasts: true },
        },
      },
      where: {
        id: request.params.id,
      },
      data: {
        name: body.name,
        description: body.description,
      },
    });
    return response.status(200).json(formattedRoute(updatedRoute));
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

// Delete route
router.delete("/route/:id", async (request, response) => {
  try {
    await prisma.route.delete({
      where: {
        id: request.params.id,
      },
    });

    return response.status(200).json({ message: "Route deleted!" });
  } catch (error) {
    const errorResponse = determineErrorResponsePrismaQuery(error);
    return response.status(errorResponse.code).json(errorResponse.body);
  }
});

export default router;
