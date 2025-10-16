import { atractivoTuristicoService } from '../services/atractivoTuristico.service'
import { Request, Response } from 'express'

export class atractivoTuristicoController {
  static async createAtractivoTuristico(req: Request, res: Response) {
    const { tipo_riesgo_id, categoria_id } = req.params
    if (!tipo_riesgo_id || !categoria_id) return res.status(400).json({ message: 'la descripcion es requerido'})
    
    const { nombre, tipo_atractivo, estado, tiempo_visita, elevacion, longitud, latitud, este, norte } = req.body

    const atractivo = await atractivoTuristicoService.createAtractivoTuristico(
      nombre,
      tipo_atractivo,
      estado,
      tiempo_visita,
      elevacion,
      longitud,
      latitud,
      este,
      norte,
      tipo_riesgo_id,
      categoria_id
    )

    return res.status(201).json(atractivo)
  }
}
