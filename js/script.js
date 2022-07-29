const cards = [
  {
    id: 1,
    title: "Cabelos",
    imageSrc: "/imagens/Cabelos-pintados.jpg",
    description: "Venha renovar a cor do seu cabelo <br /> E viver essa nova experiencia"
  },
  {
    id: 2,
    title: "Unhas",
    imageSrc: "/imagens/unhas.jpg",
    description: "Tratamento e Embelezamento para as unhas <br /> das suas mãos e pés"
  },
  {
    id: 3,
    title: "Makes",
    imageSrc: "/imagens/make.webp",
    description: "Serviço de maquiagem completo para as clientes <br /> que desejam realçar sua beleza"
  }
]

document.addEventListener("DOMContentLoaded", () => {
  const cardGroup = document.querySelector(".card-group");
  cards.forEach(item => {
    const div = document.createElement("div");
    div.className = "card"
    div.style=`background: url(${item.imageSrc}); background-size: cover; background-repeat: no-repeat;`

    const h3 = document.createElement("h3");
    h3.innerHTML = item.title;
    
    const p = document.createElement("p");
    p.innerHTML = item.description
    p.className = "card__details";

    div.append(h3, p);
    cardGroup.appendChild(div);
  })
})