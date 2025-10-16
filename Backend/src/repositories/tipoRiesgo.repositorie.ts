import { NivelTipoRiesgo } from "@prisma/client"
import { prisma } from "../config/db"

export const tipoRiesgo = {
  async create(nivel: NivelTipoRiesgo, descripcion: string) {
    return await prisma.tipoRiesgo.create({
      data: {
        nivel: nivel,
        descripcion: descripcion
      }
    })
  }
}
