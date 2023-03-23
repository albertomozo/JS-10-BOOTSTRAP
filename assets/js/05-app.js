// RECORRER LOS CURSOS MEDIANTE TRAVERSING


const cursos = document.querySelector('#cursos');
let el = cursos.children[0];
console.log(el);
console.log('📒  while ');
while(el){
    console.log(el);
    el = el.nextElementSibling;
    console.log('----');
}














