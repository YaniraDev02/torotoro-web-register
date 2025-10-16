import { prisma } from "../config/db"
import { TipoAtractivo, EstadoAtractivoTuristico } from "@prisma/client"

export const atractivoTuristico = {
  async createAtractivoTuristico(
    nombre: string,
    tipo_atractivo: TipoAtractivo,
    estado: EstadoAtractivoTuristico,
    tiempo_visita: number | string,
    elevacion: number | string,
    longitud: number | string,
    latitud: number | string,
    este: number | string,
    norte: number | string,
    tipo_riesgo_id: string,
    categoria_id: string
  ) {
    // Verificar valores que llegan
    console.log({
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
    });

    // Conversión segura antes de crear
    return await prisma.atractivoTuristico.create({
      data: {
        nombre,
        tipo_atractivo,
        estado,
        tiempo_visita: Number(tiempo_visita),
        elevacion: elevacion as number,
        longitud: longitud ? Number(longitud) : null,
        latitud: latitud ? Number(latitud) : null,
        este: este ? Number(este) : null,
        norte: norte ? Number(norte) : null,
        tipo_riesgo_id,
        categoria_id,
      },
    });
  },
};
