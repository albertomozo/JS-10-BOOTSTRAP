import {manuales,categorias } from './datos_curso.js';
import {barraCategorias } from './crearCategorias.js';
import {listaMaterias } from './crearMaterias.js';
import {listeners}  from './listener.js';


barraCategorias(categorias);
listaMaterias(manuales,categorias);
listeners();

