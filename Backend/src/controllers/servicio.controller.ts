import { servicioService } from '../services/servicio.service'
import { Request, Response } from 'express'

export class ServicioController {
  static async create(req: Request, res: Response) {
    const { id_atractivo_turistico } = req.params
    if (!id_atractivo_turistico) return res.status(400).json({ message: 'el id es requerido'})
    const { nombre, tipo_servicio, costo, direccion, telefono, calificacion, longitud, latitud } = req.body

    const servicio = await servicioService.create(nombre, tipo_servicio, costo, direccion, telefono, calificacion, longitud, latitud, id_atractivo_turistico)
    return res.status(201).json(servicio)
  }
}
