import { NombreCategoria } from "@prisma/client"
import { categoria } from "../repositories/categorias.repositorie"

export const categoriaService = {
  async create(nombre_categoria: NombreCategoria, descripcion: string) {
    return await categoria.create(nombre_categoria, descripcion)
  }
}
