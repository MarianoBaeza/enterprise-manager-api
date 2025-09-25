import { EnterpriseTypeEnum, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const now = new Date();

  const enterprises = [
    {
      name: 'Enterprise 1',
      type: EnterpriseTypeEnum.SME,
      createdAt: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5),
    },
    {
      name: 'Enterprise 2',
      type: EnterpriseTypeEnum.CORPORATE,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 10,
      ),
    },
    {
      name: 'Enterprise 3',
      type: EnterpriseTypeEnum.SME,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 15,
      ),
    },
    {
      name: 'Enterprise 4',
      type: EnterpriseTypeEnum.CORPORATE,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 20,
      ),
    },
    {
      name: 'Enterprise 5',
      type: EnterpriseTypeEnum.SME,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - 25,
      ),
    },
    {
      name: 'Enterprise 6',
      type: EnterpriseTypeEnum.CORPORATE,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate() - 5,
      ),
    },
    {
      name: 'Enterprise 7',
      type: EnterpriseTypeEnum.SME,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate() - 10,
      ),
    },
    {
      name: 'Enterprise 8',
      type: EnterpriseTypeEnum.SME,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate() - 15,
      ),
    },
    {
      name: 'Enterprise 9',
      type: EnterpriseTypeEnum.SME,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth() - 2,
        now.getDate() - 5,
      ),
    },
    {
      name: 'Enterprise 10',
      type: EnterpriseTypeEnum.CORPORATE,
      createdAt: new Date(
        now.getFullYear(),
        now.getMonth() - 2,
        now.getDate() - 10,
      ),
    },
  ];

  for (const [index, enterprise] of enterprises.entries()) {
    const createdEnterprise = await prisma.enterprise.create({
      data: {
        name: enterprise.name,
        type: enterprise.type,
        createdAt: enterprise.createdAt,
      },
    });

    if (index === 0) {
      continue;
    }

    const transferCount = Math.floor(Math.random() * 5) + 1;

    const transfers = Array.from(
      { length: transferCount },
      (_, transferIndex) => ({
        amount: Math.floor(Math.random() * 1000) + 1,
        createdAt: new Date(
          enterprise.createdAt.getTime() +
            1000 * 60 * 60 * 24 * (transferIndex + 1),
        ),
      }),
    );

    for (const transfer of transfers) {
      await prisma.transfer.create({
        data: {
          amount: transfer.amount,
          createdAt: transfer.createdAt,
          enterpriseId: createdEnterprise.id,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error('Error during seed script execution:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
