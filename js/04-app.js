// eliminar elementos

// desde el mismo elementov remove

const primero = document.querySelector('.card');
console.log('📒  .remove()');
console.log(primero);
primero.remove();
console.log('-----------')

// desde el padre remove 

const padre = document.querySelector('#cursos');
console.log('📒  .removechild()');
console.log(padre.children);
padre.removeChild(padre.children[2]);
console.log(padre.children);
console.log('-----------')











