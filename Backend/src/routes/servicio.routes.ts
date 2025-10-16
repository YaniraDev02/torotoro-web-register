import { Router } from 'express'
import { ServicioController } from '../controllers/servicio.controller'

export const servicioRouter = Router()

servicioRouter.post('/create/servicio/:id_atractivo_turistico', ServicioController.create)
