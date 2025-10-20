CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TYPE TipoAtractivo AS ENUM (
    'MIRADOR',
    'CANON',
    'CASCADA',
    'FOSIL',
    'CAVERNA'
);

CREATE TYPE EstadoAtractivoTuristico AS ENUM (
    'RIESGO',
    'DETERIORADO',
    'BUENO'
);

CREATE TYPE NivelTipoRiesgo AS ENUM (
    'BAJO',
    'MEDIO',
    'ALTO'
);

CREATE TYPE TipoRutaRutasAcceso AS ENUM (
    'CAMINO',
    'CARRETERA',
    'SENDERISMO'
);

CREATE TYPE NombreCategoria AS ENUM (
    'TURISTICO',
    'GEOLOGICO',
    'RECREATIVO',
    'CULTURAL',
    'PALEONTOLOGICO'
);

CREATE TYPE NombreServicios AS ENUM (
    'CAFETERIA',
    'HOTEL',
    'RESTAURANTE',
    'TRANSPORTE',
    'GUIA_TURISTICO',
    'CENTRO_DE_SALUD'
);

CREATE TYPE NombreCiudad AS ENUM (
    'LA_PAZ',
    'POTOSI',
    'COCHABAMBA',
    'ORURO',
    'SANTA_CRUZ',
    'TARIJA',
    'PANDO',
    'CHUQUISACA',
    'BENI'
);

CREATE TYPE MedioTransporte AS ENUM (
    'PRIVADO',
    'COMPARTIDO'
);

CREATE TABLE categoria (
    id_categoria UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre_categoria NombreCategoria NOT NULL,
    descripcion VARCHAR(45)
);

CREATE TABLE tipo_riesgo (
    id_tipo_riesgo UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nivel NivelTipoRiesgo DEFAULT 'MEDIO',
    descripcion VARCHAR(45)
);

CREATE TABLE atractivo_turistico (
    id_atrac_turist UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(80),
    tipo_atractivo TipoAtractivo,
    estado EstadoAtractivoTuristico DEFAULT 'BUENO',
    tiempo_visita INTEGER,
    elevacion DECIMAL(6,2),
    longitud DECIMAL(9,6),
    latitud DECIMAL(9,6),
    este DECIMAL(6,2),
    norte DECIMAL(6,2),
    tipo_riesgo_id UUID,
    categoria_id UUID,
    CONSTRAINT fk_tipo_riesgo FOREIGN KEY (tipo_riesgo_id) REFERENCES tipo_riesgo(id_tipo_riesgo),
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES categoria(id_categoria)
);

CREATE TABLE rutas_acceso (
    id_rutas_acceso UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tipo_ruta TipoRutaRutasAcceso,
    tiempo_est INTEGER,
    distancia_km DECIMAL(6,2),
    condicion_ruta BOOLEAN DEFAULT TRUE,
    medio_transp MedioTransporte
);

CREATE TABLE rutas_acceso_has_atractivo_turistico (
    rutas_acceso_id UUID,
    atractivo_turistico_id UUID,
    PRIMARY KEY (rutas_acceso_id, atractivo_turistico_id),
    CONSTRAINT fk_rutas FOREIGN KEY (rutas_acceso_id) REFERENCES rutas_acceso(id_rutas_acceso),
    CONSTRAINT fk_atractivo FOREIGN KEY (atractivo_turistico_id) REFERENCES atractivo_turistico(id_atrac_turist)
);

CREATE TABLE area_prot (
    id_area_prot UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    area geometry(POLYGON, 4326),
    perimetro geometry(LINESTRING, 4326),
    descripcion VARCHAR(150),
    atractivo_turistico_id UUID,
    CONSTRAINT fk_area_atractivo FOREIGN KEY (atractivo_turistico_id) REFERENCES atractivo_turistico(id_atrac_turist)
);

CREATE TABLE servicios (
    id_servicio UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(80) NOT NULL,
    tipo_servicio NombreServicios NOT NULL DEFAULT 'HOTEL',
    costo INTEGER,
    direccion TEXT,
    telefono VARCHAR(20),
    calificacion DECIMAL(2,1),
    longitud DECIMAL(9,6),
    latitud DECIMAL(9,6),
    atractivo_turistico_id UUID,
    CONSTRAINT fk_servicio_atractivo FOREIGN KEY (atractivo_turistico_id) REFERENCES atractivo_turistico(id_atrac_turist)
);
