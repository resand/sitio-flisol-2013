CREATE DATABASE IF NOT EXISTS bd_flisol2013;
USE bd_flisol2013;
CREATE TABLE  `bd_flisol2013`.`tbl_asistentes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `fecha_nac` date NOT NULL,
  `id_taller` int(11) NOT NULL,
  `fecha_regis` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_taller` (`id_taller`),
  CONSTRAINT `FK_taller` FOREIGN KEY (`id_taller`) REFERENCES `tbl_talleres` (`id_taller`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE  `bd_flisol2013`.`tbl_talleres` (
  `id_taller` int(11) NOT NULL,
  `taller` varchar(20) NOT NULL,
  `instructor` varchar(20) NOT NULL,
  PRIMARY KEY (`id_taller`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO `bd_flisol2013`.`tbl_talleres` VALUES  (1,'Taller de Gimp','Ing. Freddy Gabriel'),
 (2,'Taller de Django','Ing. Ing. Alex Dzul﻿'),
 (3,'Taller de Android','Ing. Marco Maldonado');
--
-- Create schema bd_portal_web
--