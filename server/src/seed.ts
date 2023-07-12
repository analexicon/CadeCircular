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

  await prisma.busStop.create({
    data: {
      id: "00000000-b100-0000-0000-000000000000",
      name: "Letras",
      description: "Ponto em frente ao prédio do curso de Letras",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000001-b100-0000-0000-000000000000",
      name: "ICB Subida",
      description: "Próximo ao prédio do ICB, subindo para o RU",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000002-b100-0000-0000-000000000000",
      name: "Engenharia Ponto Final",
      description: "Em frente aos prédios Itamar Franco e do IAD",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000003-b100-0000-0000-000000000000",
      name: "Engenharia Saída",
      description: "Em frente ao Restaurante Universitário",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000004-b100-0000-0000-000000000000",
      name: "ICB Descida",
      description: "Próximo ao prédio do ICB, descendo para a Via Local",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000005-b100-0000-0000-000000000000",
      name: "FAEFID",
      description: "Próximo aos prédios da FAEFID",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000006-b100-0000-0000-000000000000",
      name: "HU",
      description: "Próximo ao Hospital Universitário",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000007-b100-0000-0000-000000000000",
      name: "Bombeiros",
      description: "Próximo ao prédio dos Bombeiros",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000008-b100-0000-0000-000000000000",
      name: "Odonto",
      description: "Próximo à Faculdade de Odontologia",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000009-b100-0000-0000-000000000000",
      name: "Economia",
      description: "Em frente à Faculdade de Economia",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000010-b100-0000-0000-000000000000",
      name: "ICH",
      description: "Em frente ao Instituto de Ciências Humanas",
    },
  });
  await prisma.busStop.create({
    data: {
      id: "00000011-b100-0000-0000-000000000000",
      name: "Direito",
      description: "Em frente ao prédio da Faculdade de Direito",
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
      name: "RU - Odonto",
      description:
        "Atende à Via Local internamente, em horários de almoço e jantar",
      busStop_RouteList: {
        create: [
          {
            busStopId: "00000000-b100-0000-0000-000000000000",
            order: 0,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000001-b100-0000-0000-000000000000",
            order: 1,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000002-b100-0000-0000-000000000000",
            order: 2,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000003-b100-0000-0000-000000000000",
            order: 3,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000004-b100-0000-0000-000000000000",
            order: 4,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000005-b100-0000-0000-000000000000",
            order: 5,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000007-b100-0000-0000-000000000000",
            order: 6,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000008-b100-0000-0000-000000000000",
            order: 7,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000009-b100-0000-0000-000000000000",
            order: 8,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000010-b100-0000-0000-000000000000",
            order: 9,
            forecasts: {
              create: [],
            },
          },
          {
            busStopId: "00000011-b100-0000-0000-000000000000",
            order: 10,
            forecasts: {
              create: [],
            },
          },
        ],
      },
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
