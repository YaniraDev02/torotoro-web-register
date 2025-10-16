import { atractivoTuristicoService } from '../services/atractivoTuristico.service'
import { Request, Response } from 'express'

export class atractivoTuristicoController {
  static async createAtractivoTuristico(req: Request, res: Response) {
    const { id_tipo_riesgo, id_categoria } = req.params
    if (!id_tipo_riesgo || !id_categoria) return res.status(400).json({ message: 'la descripcion es requerido'})
    
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
      id_tipo_riesgo,
      id_categoria
    )

    return res.status(201).json(atractivo)
  }
}
