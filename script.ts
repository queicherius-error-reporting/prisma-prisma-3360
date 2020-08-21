import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const args = { where: { title: { contains: 'Foo' } }, include: { author: true } }
  console.log(await prisma.post.count(args))
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
