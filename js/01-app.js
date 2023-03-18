// vamos a posicionarnos en la navegacion
const navCat = document.querySelector('#categorias');
console.log(`📘 navCat.childNodes`);
console.log(navCat.childNodes);
console.log(`📘 navCat.children`);
console.log(navCat.children);

 // NodeList   vs   HTMLCollection


 // para acceder a los hijos usamos children[posicion] asi sucesivamente 
navHtml = navCat.children ;
console.log(navHtml[0]);  // primer li  
console.log(navHtml[3].textContent);
//navHtml[3].textContent = 'Tools';
// 
console.log(navHtml[3].children[0]);
navHtml[3].children[0].textContent = 'Tools';

//console.log(navHtml.)










