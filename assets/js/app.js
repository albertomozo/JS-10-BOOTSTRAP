import {manuales,categorias } from './datos_curso.js';
import {barraCategorias } from './crearCategorias.js';
barraCategorias(categorias);
import {listaMaterias } from './crearMaterias.js';
listaMaterias(manuales,categorias);

