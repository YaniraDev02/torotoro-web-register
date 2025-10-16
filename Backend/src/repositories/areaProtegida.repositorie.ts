import { prisma } from '../config/db'

export const areaProtegida = {
  async createAreaProtegida(area: string, perimetro: string, descripcion: string) {
    return await prisma.$executeRawUnsafe(`
      INSERT INTO "AreaProt" (id_area_prot, area, perimetro, descripcion)
      VALUES (
        gen_random_uuid(),
        ST_GeomFromText('${area}', 4326),
        ST_GeomFromText('${perimetro}', 4326),
        '${descripcion}'
      )
    `)
  }
}
