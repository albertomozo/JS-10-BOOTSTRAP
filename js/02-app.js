// vamos a posicionarnos en la navegacion
// fijemonos en los CARDS
const  cursos = document.querySelector('#cursos');
console.log(`📘 cursos.children`);
console.log(cursos.children);

/* for (const [clave,valor] of Object.entries(cursos.children)){
    console.log(`🔑 ${clave}`);
    console.log(valor);
} */




// 1. Incrementar un 20% todos los precios
for (const [clave,valor] of Object.entries(cursos.children)){
    //console.log(`💰 ${valor.children[3].children[3]}`);
    console.log(`📒 Obtencion de precio `);
    console.log(valor);
    console.log (valor.children);
    console.log (valor.children[2].children);
    console.log (valor.children[2].children[2]);
    const precio = valor.children[2].children[2].textContent;
    // obtencion del nombre card-title
    const nombre = valor.children[1].children[0].textContent;
    console.log(`💰 ${nombre} precio : ${precio}`);      
}

/*cambiar imagen */


/* cursos.children[1].children[0]
cursos.children[1].children[0].src='img/html.svg'; */













