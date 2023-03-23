import {leerDatos } from './leerDatos.js';
import {barraCategorias } from './crearCategorias.js';
import {listaMaterias } from './crearMaterias.js';
import {listeners}  from './listener.js';

const categorias = leerDatos('./assets/js/categorias.json');
console.log(categorias);
const manuales = leerDatos('./assets/js/cursos.json');
console.log(manuales);
/* barraCategorias(categorias);
listaMaterias(manuales,categorias);
listeners(); */

