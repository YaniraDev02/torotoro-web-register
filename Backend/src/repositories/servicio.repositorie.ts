import { NombreServicios } from '@prisma/client'
import { prisma } from '../config/db'

export const servicio = {
  async create(nombre: string, tipo_servicio: NombreServicios, costo: number, direccion: string, telefono: string, calificacion: number, longitud: number, latitud: number, atractivo_turistico_id: string) {
    return await prisma.servicio.create({
      data: {
        nombre,
        tipo_servicio,
        costo,
        direccion,
        telefono,
        calificacion,
        longitud: parseFloat(longitud.toFixed(6)),
        latitud: parseFloat(latitud.toFixed(6)),
        atractivo_turistico_id
      }
    })
  }
}
