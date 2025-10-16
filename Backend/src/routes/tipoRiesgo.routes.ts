import { TipoRiesgoControllers } from '../controllers/tipoRiesgo.controller'
import { Router } from 'express'

export const tipoRiesgoRouter = Router()

tipoRiesgoRouter.post('/create/tipoRiesgo', TipoRiesgoControllers.create)
