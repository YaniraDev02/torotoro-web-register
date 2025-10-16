import express from 'express'
import cors from 'cors'
import { tipoRiesgoRouter } from './routes/tipoRiesgo.routes'
import { areaProtRouter } from './routes/areaProtegida.routes'
import { atractivoTuristicoRouter } from './routes/atractivoTuristico.routes'
import { categoriaRouter } from './routes/categoria.routes'
import { servicioRouter } from './routes/servicio.routes'

export const app = express()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use('/api', tipoRiesgoRouter)
app.use('/api', areaProtRouter)
app.use('/api', atractivoTuristicoRouter)
app.use('/api', categoriaRouter)
app.use('/api', servicioRouter)
