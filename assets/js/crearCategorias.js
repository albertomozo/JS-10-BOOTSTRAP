
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
