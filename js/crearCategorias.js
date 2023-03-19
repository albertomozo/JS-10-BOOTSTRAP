/* vamos a posicionarnos en el menu de navegacion id="categorias" 
 vamos a crear un elemento por cada categoria en nuestro array categorias */
/* estructura de cada li que debemos replicar
 <li class="nav-item">
 <a class="nav-link active" aria-current="page" href="#">Active</a>
</li>
*/
const barraCat = document.querySelector("#categorias");
//console.log(barraCat);

// vamos a leer las categorias

categorias.forEach(categoria=>{
    const  datosCat = document.createElement('li');
    atrib = document.createAttribute('class');
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
    datosA.id = `btn_${categoria.nombre}` // añadido para que funcione el listener
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


