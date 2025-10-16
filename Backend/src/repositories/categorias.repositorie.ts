import { prisma } from "../config/db"
import { NombreCategoria } from "@prisma/client" 

export const categoria = {
  async create(nombre_categoria: NombreCategoria ,descripcion: string) {
    const data = await prisma.categoria.create({
      data: {
        nombre_categoria: nombre_categoria,
        descripcion: descripcion
      }
    })
    return data
  }
}
