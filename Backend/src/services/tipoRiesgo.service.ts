import { NivelTipoRiesgo } from '@prisma/client'
import { tipoRiesgo } from '../repositories/tipoRiesgo.repositorie'

export const tipoRiesgos = {
  async create(nivel: NivelTipoRiesgo, descripcion: string) {
    return await tipoRiesgo.create(nivel, descripcion)
  }
}
