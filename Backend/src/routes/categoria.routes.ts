import { Router } from 'express'
import { CategoriaController } from '../controllers/categoria.controller'

export const categoriaRouter = Router()

categoriaRouter.post('/create/categoria', CategoriaController.createCultural)
