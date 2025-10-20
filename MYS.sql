CREATE DATABASE PROYECTO;
USE PROYECTO;

CREATE TABLE atractivo_turistico (
    id_atrac_turist INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45),
    tipo_atractivo INT,
    estado INT,
    Tiempo_visita TIME,
    elevacion DECIMAL(6,2),
    longitud DECIMAL(9,6),
    latitud DECIMAL(9,6),
    este DECIMAL(6,2),
    norte DECIMAL(6,2),
    Tipo_riesgo_idTipo_riesgo INT,
    categoria_id_categoria INT,
    FOREIGN KEY (Tipo_riesgo_idTipo_riesgo) REFERENCES Tipo_riesgo(idTipo_riesgo),
    FOREIGN KEY (categoria_id_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(45),
    descripcion VARCHAR(45)
);

CREATE TABLE Tipo_riesgo (
    idTipo_riesgo INT AUTO_INCREMENT PRIMARY KEY,
    Nivel VARCHAR(45),
    Descripcion VARCHAR(45)
);

CREATE TABLE Rutas_acceso (
    idRutas_acceso INT AUTO_INCREMENT PRIMARY KEY,
    tipo_ruta VARCHAR(45),
    Tiempo_est TIME,
    Distancia_km DECIMAL(6,2),
    Condicion_ruta VARCHAR(45),
    Medio_transp VARCHAR(45)
);

CREATE TABLE Rutas_acceso_has_atractivo_turistico (
    Rutas_acceso_idRutas_acceso INT,
    atractivo_turistico_id_atrac_turist INT,
    PRIMARY KEY (Rutas_acceso_idRutas_acceso, atractivo_turistico_id_atrac_turist),
    FOREIGN KEY (Rutas_acceso_idRutas_acceso) REFERENCES Rutas_acceso(idRutas_acceso),
    FOREIGN KEY (atractivo_turistico_id_atrac_turist) REFERENCES atractivo_turistico(id_atrac_turist)
);

CREATE TABLE Ciudad (
    idCiudad INT AUTO_INCREMENT PRIMARY KEY,
    Nombre_ciud VARCHAR(45),
    Municipio VARCHAR(45),
    Rutas_acceso_idRutas_acceso INT,
    FOREIGN KEY (Rutas_acceso_idRutas_acceso) REFERENCES Rutas_acceso(idRutas_acceso)
);

CREATE TABLE Area_prot (
    idArea_prot INT AUTO_INCREMENT PRIMARY KEY,
    Area POLYGON,
    Perimetro POLYGON,
    Descripcion VARCHAR(150),
    atractivo_turistico_id_atrac_turist INT,
    FOREIGN KEY (atractivo_turistico_id_atrac_turist) REFERENCES atractivo_turistico(id_atrac_turist)
);

CREATE TABLE Registro_captura (
    idRegistro_captura INT AUTO_INCREMENT PRIMARY KEY,
    Fecha DATE,
    Hora TIME,
    Tipo_Capt VARCHAR(45),
    Altura DECIMAL(6,2),
    atractivo_turistico_id_atrac_turist INT,
    FOREIGN KEY (atractivo_turistico_id_atrac_turist) REFERENCES atractivo_turistico(id_atrac_turist)
);

INSERT INTO categoria (nombre, descripcion)
VALUES 
('Geológica', 'Formaciones rocosas y cavernas'),
('Arqueológica', 'Restos fósiles y pinturas rupestres'),
('Natural', 'Paisajes naturales y cascadas');

INSERT INTO Tipo_riesgo (Nivel, Descripcion)
VALUES 
('Bajo', 'Acceso fácil y seguro'),
('Medio', 'Sendero irregular o con desniveles'),
('Alto', 'Acceso con peligro o dificultad técnica');

INSERT INTO Rutas_acceso (IdRutas_acceso, tipo_ruta, Tiempo_est, Distancia_km, Condicion_ruta, Medio_transp)
VALUES
('1', 'carretera', '03:37:02', '1.9', 'Riesgoso','Senderismo'),
('2', 'sendero', '02:00:00', '2.2', 'Riesgoso', 'senderismo'),
('3', 'sendero', '02:04:43', '21', 'Medio', 'senderismo'),
('4', 'caminata', '00:44:32', '0.475', 'Buena', 'senderismo');

INSERT INTO Rutas_acceso_has_atractivo_turistico (Rutas_acceso_idRutas_acceso, atractivo_turistico_id_atrac_turist)
VALUES
('1', '1'),
('2', '2'),
('3', '3'),
('4', '4');

INSERT INTO Ciudad (idCiudad, Nombre_ciud, Municipio, Rutas_acceso_idRutas_acceso)
VALUES
('1', 'La Paz', 'La Paz'),
('2', 'Cochabamba', 'Cochabamba'),
('3', 'Cochabamba', 'Tarata'),
('4', 'Cochabamba', 'Torotoro');

INSERT INTO Area_prot (idArea_prot, Area, Perimetro, Descripcion, atractivo_turistico_id_atrac_turist)
VALUES

INSERT INTO atractivo_turistico (id_atrac_turist, nombre, tipo_atractivo, estado, Tiempo_visita, elevacion, latitud, longitud, este, norte, Tipo_riesgo_idTipo_riesgo, categoria_id_categoria)
VALUES
('1', 'Cañon de Torotoro', 'Cañon', 'Bueno', '03:00:00', '2672', '-18.109413', '-65.771800', '3,800', '-18.10842', '-65.88443', '190,000', '7,993,000', 'Medio', 'Natural'),
('2', 'Cascadas del Vergel', 'Cascada', 'Bueno', '03:00:00', '2470', '-18.11182', '-65.77421', '206,407', '7,995,232', 'Medio', 'Natural'),
('3', 'Ciudad de Itas', 'Caverna', 'Bueno', '03:00:00', '3,800', '-18.10842', '-65.88443', '190000', '7,993,000','Bajo', 'Geológico'),
('4', 'Huellas de dinosaurio', 'Fosil', 'Bueno', '02:00:00', '2.736', '-18.131220', '-65.761023', 'Bajo', 'Arqueológica');