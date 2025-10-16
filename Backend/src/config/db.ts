import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export const connectDB = async () => {
  try {
    await prisma.$connect()
    console.log('Conectado a la base de datos')
  } catch (error) {
    console.log(error)
  }
}

