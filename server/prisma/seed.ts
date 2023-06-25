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
