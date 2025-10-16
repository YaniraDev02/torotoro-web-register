import { Router } from 'express'
import { atractivoTuristicoController } from '../controllers/atractivoTuristico.controller'

export const atractivoTuristicoRouter = Router()

atractivoTuristicoRouter.post('/create/atractivoTuristico/:id_categoria/:id_tipo_riesgo', atractivoTuristicoController.createAtractivoTuristico)
