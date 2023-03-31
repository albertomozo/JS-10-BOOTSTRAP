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
  text.textContent = `Precio: ${materia.precio}€`;

  // boton para lanzar la modal 
/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    boton en crear_categorias
  </button> */
  
  const buttonmodal = document.createElement("button");
  buttonmodal.classList.add("btn", "btn-primary");
/*   buttonmodal.dataset.bs-toggle = "modal";
  buttonmodal.dataset.bs-target = "#exampleModal"; */
  buttonmodal.setAttribute("data-bs-toggle","modal");
  buttonmodal.setAttribute("data-bs-target","#exampleModal");

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
  card.appendChild(img);
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
          <h1 class="modal-title fs-5" id="exampleModalLabel">HTML</h1>
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
