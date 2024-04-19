import {categoriaNombre } from './crearCategorias.js';

export function  listaMaterias  (manuales,categorias){

  const cardsContainer = document.getElementById("cursos");

  crearModal();

  manuales.materias.forEach(materia => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    card.classList.add(categorias[materia.categoria].nombre); // añadido para que funcione el tema de los botones de categorias
    card.classList.add("materias"); // añadido para que funcione el tema de los botones de categorias
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = `assets/img/${materia.imagen}`;
    img.alt = materia.materia;

    const body = document.createElement("div");
    body.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.classList.add("text-center");
    title.classList.add("bg-gradient");
    title.classList.add("bg-secondary");

    title.textContent = materia.materia;

    const text = document.createElement("p");
    text.classList.add("card-text");
    // compruebo si hay descuento
    console.log(materia.materia ,  materia.oferta)
    if (materia.oferta != null && materia.oferta !== undefined) { 
      text.textContent = `Precio rebajado ${materia.oferta} % : Antes ${materia.precio} € Ahora ${materia.precio - (materia.precio * materia.oferta/100)}€`;
      text.style.border = "1px solid red";
      text.classList.add("oferta");
    } else {     
      text.textContent = `Precio: ${materia.precio}€`;
    }

    // boton para lanzar la modal 
  /* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      boton en crear_categorias
    </button> */
    
    const buttonmodal = document.createElement("button");
    buttonmodal.classList.add("btn", "btn-primary", "btn-modal"); // clase btn-modal sirve para crear los listeners
  /*   buttonmodal.dataset.bs-toggle = "modal";
    buttonmodal.dataset.bs-target = "#exampleModal"; */
    buttonmodal.setAttribute("data-bs-toggle","modal");
    buttonmodal.setAttribute("data-bs-target","#exampleModal");
    buttonmodal.setAttribute("data-datos",`{"nombre": "${materia.materia}" , "img" : "${materia.imagen}"}`);
    buttonmodal.setAttribute("data-categoria",`${categorias[materia.categoria].nombre}`);
    
    buttonmodal.id=`mod-${materia.materia}`; 

    buttonmodal.textContent = "Ver Detalle";

    const button = document.createElement("a");
    button.classList.add("btn", "btn-primary");
    button.href = materia.url;
    button.textContent = "Comprar";
  
    let buttonurl = document.createElement("a");
    buttonurl.classList.add("btn", "btn-primary");
    buttonurl.href = materia.url;
    buttonurl.target = "_blank";
    buttonurl.innerHTML = tipoCurso(materia) + " Ver Material";
    


    body.appendChild(title);
    body.appendChild(text);
    // validamos si mno hay imagen. Podriamos tener una por defecto para incluir en estos casos
    if (materia.imagen != undefined && materia.url != ''){
      card.appendChild(img);
    }
    card.appendChild(body);
    card.appendChild(buttonmodal);
    card.appendChild(button);
    // validar enlace, si no existe valor no mosteramos boton
    console.log(materia.url);
    if (materia.url != undefined){
      card.appendChild(buttonurl);
    }
    cardsContainer.appendChild(card);
  });

  listeners(manuales);
}

export function itinerarios(manuales,categorias){
  let resultado = [];
  console.log(`📘 Itineracios`)
  categorias.forEach(item => {
    if (item.id >0){
      console.log(item.nombre);
      console.log(manuales);
      manuales.materias.filter(manual => {
        let curso = {};
        if (manual.categoria == item.id) {
          // obtener nombre categoria
          

          curso.categoria = item.id;
          curso.categoriaNombre = categoriaNombre(item.id,categorias);
          curso.materia = manual.materia;
          curso.precio = manual.precio;
          resultado.push(curso);

          console.log(`..... ${manual.materia}`);
          
        }
      });
    }   
  });
  return resultado;

}

function tipoCurso(materia){
  let tipoT="";
  switch (materia.tipo)
  {
      case 'drive':
          tipoT = 'googledrive.svg';
          break;
      case 'pdf':
            tipoT = 'adobeacrobatreader.svg';
            break;
      default :
          tipoT = 'icons8-bloc-50.png';
  }
  return `<img src="assets/img/${tipoT}" width="20px"></img>`;
 
}



function crearModal() {
  const modalHtml =  `<!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">html</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- diseño personalizado-->
          <!-- podriamos buscar un card distinto. En realidad aquí se 
                incluirian más datos
        -->
        <!-- card horinzontal -->
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="./assets/img/html.svg" class="img-fluid rounded-start" alt="HTML">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">CATEGORIA</h5>
                  <p class="card-text">ENLACE</p>
                  <p class="card-text"><small class="text-muted">PRECIO</small></p>
                </div>
              </div>
            </div>
          </div>


          <!-- fin diseño personalizado-->

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CERRAR</button>
          <button type="button" class="btn btn-primary">Favoritos</button>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin",modalHtml);

}

function listeners(manuales)
{
  const modal = document.querySelector("#exampleModal");
const dialog = modal.querySelector(".modal-dialog");
const content = dialog.querySelector(".modal-content");

const botones = document.querySelectorAll(".btn-modal");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    console.log(boton);
    const datos = JSON.parse(boton.getAttribute("data-datos"));
    const titulo = content.querySelector(".modal-title");
    const cuerpo = content.querySelector(".modal-body");

    const materiaNombre = boton.id.split('-').pop();
    console.log(materiaNombre);
    // buscar esta materia en el objeto materias
    console.log(manuales);
    const result = manuales.materias.filter(manual => manual.materia == materiaNombre);
    console.log(result); 

    titulo.innerText = result[0].materia;
    console.log(cuerpo.children[0].children[0].children[0].children[0]);

    cuerpo.children[0].children[0].children[0].children[0].setAttribute('src',`./assets/img/${result[0].imagen}` );
    console.log(boton);
    cuerpo.children[0].children[0].children[1].children[0].children[0].innerText=boton.getAttribute('data-categoria');
    console.log(`💰 ${result[0].precio}`);
    cuerpo.children[0].children[0].children[1].children[0].children[1].innerText=result[0].precio;
    cuerpo.children[0].children[0].children[1].children[0].children[2].innerText=result[0].url;
  });
});
}
