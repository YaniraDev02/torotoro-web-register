import { atractivoTuristico } from '../repositories/atractivoTuristico.repositorie'
import { EstadoAtractivoTuristico, TipoAtractivo } from "@prisma/client"

export const atractivoTuristicoService = {
  async createAtractivoTuristico(
    nombre: string,
    tipo_atractivo: TipoAtractivo,
    estado: EstadoAtractivoTuristico,
    tiempo_visita: number,
    elevacion: number,
    longitud: number,
    latitud: number,
    este: number,
    norte: number,
    tipo_riesgo_id: string,
    categoria_id: string
  ): Promise<any> {
    return await atractivoTuristico.createAtractivoTuristico(
      nombre,
      tipo_atractivo,
      estado,
      tiempo_visita,
      elevacion,
      longitud,
      latitud,
      este,
      norte,
      tipo_riesgo_id,
      categoria_id
    )
  },
}
