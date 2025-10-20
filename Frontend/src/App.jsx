import { Route, Routes } from 'react-router-dom'
import { Categoría } from './pages/Categoria'
import { TipoRiesgo } from './pages/TipoRiesgo'
import { AtractivoTuristico } from './pages/AtractivoTuristico'
import { Servicios } from './pages/Servicios'

export const App = () => {
  return (
    <Routes>
      <Route path='/categoria' element={<Categoría/>}/>
      <Route path='/tipoRiesgo/:id_categoria' element={<TipoRiesgo/>}/>
      <Route path='/atractivoTuristico/:id_categoria/:id_tipo_riesgo' element={<AtractivoTuristico/>}/>
      <Route path='/create/servicio/:id_atractivo_turistico' element={<Servicios/>} />
    </Routes>
  )
}
