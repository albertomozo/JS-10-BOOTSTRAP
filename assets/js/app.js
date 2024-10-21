import {categorias } from './datos_curso.js';
import {barraCategorias } from './crearCategorias.js';
import {listaMaterias,itinerarios } from './crearMaterias.js';
import {listeners}  from './listener.js';

let manuales = {
    materias: []  // Inicializamos manuales con una propiedad materias vacía
};

async function fetchMaterias() {
    try {
        const response = await fetch("https://notion-js-sdk-vercel.vercel.app/cursosweb");
        const result = await response.json();
        manuales.materias = result;
        console.log('Materias fetched:', manuales.materias);  // Imprime los datos cuando están listos
        return manuales.materias;  // Retorna los datos una vez obtenidos
    } catch (err) {
        console.error("Error fetching materias:", err);
        return null;
    }
}

// Llamar a la función y realizar operaciones cuando los datos estén disponibles
async function init() {
    await fetchMaterias();  // Esperamos a que fetchMaterias termine antes de continuar

    // Aquí las funciones que dependen de manuales.materias
    barraCategorias(categorias);
    
    listaMaterias(manuales, categorias);  // Ahora manuales tiene los datos
    const arrayMaterias = itinerarios(manuales, categorias);  // Usamos manuales después de la carga

    console.log('Materias después de fetch:', manuales.materias);  // Ahora los datos estarán disponibles
    console.log('📕 ' + manuales.materias);  // Esto ahora se ejecuta después de la carga
    console.log(arrayMaterias);  // Imprimimos arrayMaterias después de la ejecución

    listeners();  // Esto debería ir al final si depende de los datos o las operaciones previas
}

init();  // Iniciar el proceso


