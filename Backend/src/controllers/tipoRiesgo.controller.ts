import { Request, Response } from 'express'
import { tipoRiesgos } from '../services/tipoRiesgo.service'

export class TipoRiesgoControllers {
  static async create(req: Request, res: Response) {
    const { nivel, descripcion } = req.body
    if (!nivel || !descripcion) return res.status(400).json({ message: 'la descripcion es requerido'})     

    const tipoRiesgo = await tipoRiesgos.create(nivel, descripcion)
    return res.status(201).json(tipoRiesgo)
  }
}
