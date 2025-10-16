import { NombreServicios } from "@prisma/client";
import { servicio } from "../repositories/servicio.repositorie";

export const servicioService = {
  async create(nombre: string, tipo_servicio: NombreServicios, costo: number, direccion: string, telefono: string, calificacion: number, longitud: number, latitud: number, atractivo_turistico_id: string) {
    return await servicio.create(nombre, tipo_servicio, costo, direccion, telefono, calificacion, longitud, latitud, atractivo_turistico_id)
  }
}
