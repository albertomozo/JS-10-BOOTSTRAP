// crear un nuevo enlace en la barra de navegacion
const nuevoEnlace=document.createElement('a');
const elemento = document.querySelector('.menu').children[0].children[2];

nuevoEnlace.href="#nuevoenlace";
nuevoEnlace.innerHTML="Nuevo Enlace";
nuevoEnlace.target = "_blank";
// atributo personalizados
//nuevoEnlace.setAttribute('data-enlace','nuevoenlace');
console.log('nuevoEnlace');
elemento.appendChild(nuevoEnlace);
//elemento.insertAdjacentHTML('afterbegin',nuevoEnlace); // no funciona
console.log(nuevoEnlace);
console.log(`📎${nuevoEnlace}`);



// appendChild

//insertBefore

//innerHTML

//insertAdjacentHTML()












