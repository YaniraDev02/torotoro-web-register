import { categoriaService } from '../services/categoria.service'
import { Request, Response } from 'express'

export class CategoriaController {
  static async createCultural(req: Request, res: Response) {
    try {
      const { nombre_categoria, descripcion } = req.body
      if (!descripcion) return res.status(400).json({ message: 'l1a descripcion es requerido'})
      if (!nombre_categoria) return res.status(400).json({ message: 'la descripcion es requerido'})
        
      const categoria = await categoriaService.create(nombre_categoria, descripcion)
      return res.status(201).json(categoria)
    } catch (error) {
      console.log(error)
      return
    }
  }
}
