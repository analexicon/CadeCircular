import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const bus = await prisma.bus.create({
    data: {
      id: "00000000-b000-0000-0000-000000000000",
      available: true,
      capacity: 50,
      licensePlate: "AAA-0000",
      model: "Mercedes-Benz",
      journeys: { create: [] },
    },
  });

  const busStop = await prisma.busStop.create({
    data: {
      id: "00000000-b100-0000-0000-000000000000",
      name: "ponto da letras",
      description: "ponto em frente ao predio do curso de letras",
      // busStopRoute: { create: [] },
    },
  });

  const driver = await prisma.driver.create({
    data: {
      employee: {
        create: {
          id: "00000000-e000-0000-0000-000000000000",
          name: "Edenilson",
          username: "Ede",
          password: "cigarro",
          identification: "123456",
          type: 1,
        },
      },
    },
  });

  const route = await prisma.route.create({
    data: {
      id: "00000000-r000-0000-0000-000000000000",
      name: "Restaurante universitario",
      description: "Rota que passa pelo restaurante universitario",
      // busStopRoute: { create: [] },
    },
  });

  const journey = await prisma.journey.create({
    data: {
      id: "00000000-j000-0000-0000-000000000000",
      paused: false,
      active: true,
      startDate: new Date(),
      nextBusStopIndex: 123,
      driver: {
        connect: { employeeId: "00000000-e000-0000-0000-000000000000" },
      },
      bus: { connect: { id: "00000000-b000-0000-0000-000000000000" } },
      route: { connect: { id: "00000000-r000-0000-0000-000000000000" } },
    },
  });

  const manager = await prisma.manager.create({
    data: {
      employee: {
        create: {
          id: "00000000-m000-0000-0000-000000000000",
          name: "Adalberto",
          username: "Adalbert",
          password: "cafe",
          identification: "54321",
          type: 2,
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
