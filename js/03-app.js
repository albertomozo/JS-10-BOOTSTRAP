// vamos a movernos hacia arriba parent

const  cursos = document.querySelector('#cursos');
console.log(`📘 cursos.parentElement`);
console.log(cursos.parentElement);

// hermanos - Sigiente
console.log(`📒 cursos.children[0]  `);
console.log(cursos.children[0]);
console.log(`📒 cursos.children[0].nextElementSibling `);
console.log(cursos.children[0].nextElementSibling);


// anterior 

console.log('📒 ultimo :nth-child(4)  o :last-type-of');

//const ultimo = document.querySelector('.card:nth-child(4)');
const ultimo = document.querySelector('.card:last-of-type');

console.log(ultimo);

console.log('📒 previous');

console.log(ultimo.previousElementSibling);
console.log(ultimo.previousElementSibling.previousElementSibling);

///////
console.log('📒 firstElementChild');
console.log(cursos.firstElementChild);

console.log('📒 lastElementChild');
console.log(cursos.lastElementChild);










