
export function barraCategorias(categorias){
    const barraCat = document.querySelector(`#categorias`);
    //console.log(categorias);

    // vamos a leer las categorias

    categorias.forEach(categoria=>{
        const  datosCat = document.createElement('li');
        let atrib = document.createAttribute('class');
        atrib.value = 'nav-link';
        datosCat.setAttributeNode(atrib);
        atrib = document.createAttribute('id');
        atrib.value = categoria.nombre;
        datosCat.setAttributeNode(atrib);
        
        //console.log(datosCat);
        barraCat.appendChild(datosCat);


        const datosA = document.createElement('a');
        atrib = document.createAttribute('class');
        atrib.value = 'nav-link';
        if (categoria.nombre == 'Todos') {atrib.value = 'nav-link active';}  
        datosA.setAttributeNode(atrib);
        atrib = document.createAttribute('aria-current');
        atrib.value = 'page';
        datosA.id = `btn_${categoria.nombre}`; // añadido para que funcione el listener
        datosA.classList.add('cate'); // añadido para que funcione el activa 
        datosA.setAttributeNode(atrib);
        atrib = document.createAttribute('href');
        atrib.value = '#';
        datosA.setAttributeNode(atrib);
        datosA.innerText=categoria.nombre;
        
        //console.log(datosA);
        //console.log(categoria.nombre);
        const liCat = document.querySelector(`#${categoria.nombre}`);
        //console.log(liCat);
        liCat.appendChild(datosA);
    })
    console.log('entro');

}

/* export function categoriaNombre(id,categorias){
    const categoriaEncontrada = categorias.find(item => item.id === id);
    if (categoriaEncontrada) {
        return categoriaEncontrada.nombre;
    } else {
        return "Categoría no encontrada"; // O puedes manejarlo de otra manera según tus necesidades
    }
} */

export  function categoriaNombre(id,categorias){
    const categoriaE = categorias.find(cat => cat.id === id);
    return categoriaE ? categoriaE.nombre : "Categoría no encontrada";
}

export  function catNom(id,categorias){
    const categoriaE = categorias.find(cat => cat.id === id);
    return categoriaE ? categoriaE.nombre : "Categoría no encontrada";
}
