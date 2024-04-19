import {manuales,categorias } from './datos_curso.js';
import {barraCategorias } from './crearCategorias.js';
import {listaMaterias,itinerarios } from './crearMaterias.js';
import {listeners}  from './listener.js';


barraCategorias(categorias);
listaMaterias(manuales,categorias);
const arrayMaterias = itinerarios(manuales,categorias);


console.log(arrayMaterias);
listeners();

