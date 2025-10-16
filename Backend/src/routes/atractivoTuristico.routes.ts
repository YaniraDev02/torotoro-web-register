import { Router } from 'express'
import { atractivoTuristicoController } from '../controllers/atractivoTuristico.controller'

export const atractivoTuristicoRouter = Router()

atractivoTuristicoRouter.post('/create/atractivoTuristico/:tipo_riesgo_id/:categoria_id', atractivoTuristicoController.createAtractivoTuristico)
