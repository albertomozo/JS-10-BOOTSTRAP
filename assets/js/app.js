import {leerDatos } from './leerDatos.js';
import {barraCategorias } from './crearCategorias.js';
import {listaMaterias } from './crearMaterias.js';
import {listeners}  from './listener.js';

let categorias;
let materias;

leerDatos('./assets/data/categorias.json')
.then(data => {
    console.log("Valor recuperado: " + data);
    // ... haz algo con el valor recuperado ...
    categorias = JSON.parse(data);
    console.log(categorias.categorias);
    barraCategorias(categorias.categorias);

  })
  .catch(err => {
    console.error("ERROR: ", err.message);
  });
  

  fetch('./assets/data/cursos.json')
      .then(response => {    
        if (response.ok) {
          return response.text();
        } else {
          throw new Error(response.status);
        }
      })
      .then(data => {
        console.log("Datos: " + data);
        materias = JSON.parse(data);
        console.log(materias.materias);
        listaMaterias(materias.materias,categorias.categorias);
      })
      .catch(err => {
        console.error("ERROR: ", err.message);
      });


listeners(); 


