export function  listaMaterias  (manuales,categorias){

const cardsContainer = document.getElementById("cursos");

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
  title.textContent = materia.materia;

  const text = document.createElement("p");
  text.classList.add("card-text");
  text.textContent = `Precio: ${materia.precio}€`;

  const button = document.createElement("a");
  button.classList.add("btn", "btn-primary");
  button.href = materia.url;
  button.textContent = "Comprar";

  const buttonurl = document.createElement("a");
  buttonurl.classList.add("btn", "btn-primary");
  buttonurl.href = materia.url;
  buttonurl.textContent = "Ver detalle";

  body.appendChild(title);
  body.appendChild(text);
  card.appendChild(img);
  card.appendChild(body);
  card.appendChild(button);
  card.appendChild(buttonurl);
  cardsContainer.appendChild(card);
});
}