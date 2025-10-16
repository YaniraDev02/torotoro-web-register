import { areaProtegida } from '../services/areaProt.service'
import { Request, Response } from 'express'

export class AreaProtegidaController {
   static async createAreaProtegida (req: Request, res: Response) {
    const { area, perimetro, descripcion } = req.body
    const areaProt = await areaProtegida.createAreaProtegida(area, perimetro, descripcion)
    res.json(areaProt)

    return res.status(201).json(areaProtegida)
  }
}
