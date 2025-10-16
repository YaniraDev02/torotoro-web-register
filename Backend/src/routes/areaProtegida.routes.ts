import { Router } from 'express'
import { AreaProtegidaController } from '../controllers/areaProtegida.controller'

export const areaProtRouter = Router()

areaProtRouter.post('/create/areaProtegida', AreaProtegidaController.createAreaProtegida)
