-- create schema `programacion2`;
-- use `programacion2`;

-- CREATE TABLE usuarios (
-- id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- nombre VARCHAR(25) NOT NULL,
-- emial VARCHAR(100) NOT NULL UNIQUE,
-- contraseña VARCHAR(200) NOT NULL,
-- foto_de_perfil VARCHAR(300),
-- dni INT NOT NULL UNIQUE,
-- fecha_de_nacimiento DATE NOT NULL,
-- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- deleted_at TIMESTAMP NULL
-- );

-- use `programacion2`;
-- describe `usuarios`;

-- use `programacion2`;
-- create table `productos`(
-- id  INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- usuario_id INT UNSIGNED NOT NULL,
-- nombre VARCHAR(50) NOT NULL,
-- descripcion TEXT NOT NULL, 
-- foto_del_producto VARCHAR(300),
-- fecha_de_carga DATE NOT NULL,
-- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- deleted_at TIMESTAMP NULL,
-- CONSTRAINT fk_productos_usuarios FOREIGN KEY(usuario_id) REFERENCES usuarios(id)
-- );

-- use `programacion2`;
-- describe `productos`;

-- use `programacion2`;
-- CREATE TABLE `comentarios`(
-- id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
-- usuario_id INT UNSIGNED NOT NULL,
-- producto_id INT UNSIGNED NOT NULL,
-- comentario TEXT NOT NULL,
-- created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
-- deleted_at TIMESTAMP NULL,
-- CONSTRAINT `fk_comentarios_usuarios` FOREIGN KEY(`usuario_id`) REFERENCES usuarios(id),
-- CONSTRAINT `fk_comentarios_productos` FOREIGN KEY(`producto_id`) REFERENCES productos(id)
-- );

-- use `programacion2`;
-- describe `comentarios`;

-- use `programacion2`;
-- INSERT INTO `usuarios`(nombre, emial, contraseña, dni, fecha_de_nacimiento)
-- values ('raul', 'raulperez@gmail.com', 'rperez234', 250986759, '1978-04-23');

-- use `programacion2`;
-- INSERT INTO `usuarios`(nombre, emial, contraseña, dni, fecha_de_nacimiento)
-- values ('felix', 'falexander@udesa.edu.ar', 'papafrita', 93954123, '2002-07-05');

-- use `programacion2`;
-- INSERT INTO `usuarios`(nombre, emial, contraseña, dni, fecha_de_nacimiento)
-- values ('chiara', 'cfacal@udesa.edu.ar', 'alfajor', 44234658, '2002-03-28');

-- use `programacion2`;
-- INSERT INTO `usuarios`(nombre, emial, contraseña, dni, fecha_de_nacimiento)
-- values ('tina', 'mrubaja@udesa.edu.ar', 'tina234', 43123908, '2001-10-14');

-- use `programacion2`;
-- INSERT INTO `usuarios`(nombre, emial, contraseña, dni, fecha_de_nacimiento)
-- values ('lali', 'laliesp@gmail.com', 'laliii10', 35348731, '1996-04-10');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (1,'2023-01-23', 'Remera Infinite', 'Remera de jersey, cuello redondo manga corta. Molderia oversize. Largo a la cadera. Estampa centrada en frente. Estampa en mangas.');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (1,'2023-01-30', 'Pantalon Estrella', 'Jean 5 bolsillos tiro alto relajado, piernas rectas, con tajos laterales de ambos lados en altura de cadera. Bordes de bolsillos gastados.');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (2,'2023-03-02', 'Buzo Rustic', 'Buzo cuello redondo de frisa liviana. Cuello y puños aplicados en ribb complemento. Detalle de abertura en puños para pasar los dedos');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (2, '2023-02-25', 'Botas Cowboy', 'Bota de PU simil gamuza. Plataforma de 4 cm. Taco de 11,5 cm. Con cierre posterior.');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (3, '2023-04-02', 'Blazer Eco-cuero', 'Jacket en cuero ecologico forrado al tono. Cruce central con dos botones al tono. Bolsillos con tapa en delantero');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (3, '2023-03-17', 'Jean Iconic', 'Jean 5 bolsillos calce relax (tiro medio relajado y pierna recta larga), en color gris gastado con roturas sobre el ruedo.');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (4, '2022-12-22', 'Top Pink', 'Top tipo corset de algodón con lycra. Recortes en delantero. Escote cuadrado con terminacion de collareta al tono de la base');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (4, '2023-01-31', 'Vestido Legally', 'Vestido corto de satén con sustracciones en cintura. Unión central en abdomen, en forma triangular');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (5, '2023-03-11', 'Zapatillas Air', 'Zapatilla de PU con interior al tono, lengueta grande, cordones anchos. Base con camara de aire.');

-- use `programacion2`;
-- INSERT INTO `productos`(usuario_id, fecha_de_carga, nombre, descripcion)
-- VALUES (5, '2023-02-28', 'Sandalias Flower', 'Sandalias de cuero sintético. Taco medio. Con pulsera fina regulable. Sin plataforma.');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (1, 1, 'Muy buena publicación, me interesa');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 1, 'la mejor compra del año');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (3, 1, 'Que lindo!');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (5, 1, 'Tremendo');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (1, 2, 'Fancy');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 2, 'Me encanta, dame 1000');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (3, 2, 'Muy comodo');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (4, 2, 'Muy buena calidad');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 3, 'muy accesible');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (3, 3, 'me encanta el color');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (4, 3, 'que buen producto');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (5, 3, 'es lo que estaba buscando hace muchooo');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (1, 4, 'lindisimo');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 4, 'super iconic, love it');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (4, 4, 'espectacular');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (5, 4, 'lo amoo');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (1, 5, 'perfecto regalo para mi mamá');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 5, 'alusinado con sus productos');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (3, 5, 'tremenda página, este producto no lo encuntro en ningun lado');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (5, 5, 'enamoradaa');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (5, 6, 'Muy comodo');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (4, 6, 'me encanta ');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (3, 6, 'vintage');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 6, 'el pantalon mas comodo que me probe en mi vida');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (1, 7, 'divino');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 7, 'el mejor regalo para mi novia');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (3, 7, 'es perfectoo');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (4, 7, 'lindisimo');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (1, 8, 'muy bueno precio calidad');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (3, 8, 'la mejor compra que hice en el año');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (4, 8, 'es perfecto');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (5, 8, 'comodisimo y perfecto para el verano');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (1, 9, 'son muy comodas');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 9, 'muy buen color');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (4, 9, 'la comodida para caminar es muy importante para mi, estas zapatillas son perfectas');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (5, 9, 'increibles, nada mas que decir');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (1, 10, 'se las regale a mi hermana y no dejo de sonreir');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (2, 10, 'gran producto, este y todos los que hay en la página');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (3, 10, 'sencillas y perfectas');

-- use `programacion2`;
-- INSERT INTO `comentarios`(usuario_id, producto_id, comentario)
-- VALUES (5, 10, 'muy lindas');



