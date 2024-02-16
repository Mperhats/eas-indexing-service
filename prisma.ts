import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

async function main() {
  await prisma.$connect()
    .then(() => console.log('Database connection successful'))
    .catch((err: any) => console.error('Database connection error:', err));


  await prisma.$disconnect();
}

main();
