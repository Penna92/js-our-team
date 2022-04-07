// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Scriviamo prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

// CREO ARRAY DI OGGETTI CARDS

let cards = [
  {
    image: "img/wayne-barnett-founder-ceo.jpg",
    name: "Wayne Barnett",
    role: "Founder & CEO",
  },
  {
    image: "img/angela-caroll-chief-editor.jpg",
    name: "Angela Caroll",
    role: "Chief Editor",
  },
  {
    image: "img/walter-gordon-office-manager.jpg",
    name: "Walter Gordon",
    role: "Office Manager",
  },
  {
    image: "img/angela-lopez-social-media-manager.jpg",
    name: "Angela Lopez",
    role: "Social Media Manager",
  },
  {
    image: "img/scott-estrada-developer.jpg",
    name: "Scott Estrada",
    role: "Developer",
  },
  {
    image: "img/barbara-ramos-graphic-designer.jpg",
    name: "Barbara Ramos",
    role: "Graphic Designer",
  },
];

let teamContainer = document.getElementsByClassName("team-container")[0];
let teamCardDiv = "";
// console.log(teamContainer);

// CICLO CHE STAMPA LE VARIE CARDS E ASSEGNA LORO LE VARIE PROPRIETA' DEGLI OGGETTI

for (let i = 0; i < cards.length; i++) {
  let teamCardDiv = document.createElement("div");
  // console.log(teamCardDiv);
  teamCardDiv.setAttribute("class", "team-card");
  teamContainer.append(teamCardDiv);
  teamCardDiv.innerHTML = `<div class="card-image">
<img
  src=${cards[i].image}
  alt=${cards[i].name}
/>
</div>
<div class="card-text">
<h3>${cards[i].name}</h3>
<p>${cards[i].role}</p>
</div>`;
}

// NUOVO OGGETTO CARD DA POTER AGGIUNGERE AL CLICK CON LE PROPRIETA' SCELTE DALL'UTENTE

let newCards = {
  image: "",
  name: "",
  role: "",
};

let addCards = document.getElementById("addMemberButton");
addCards.addEventListener("click", function () {
  if (document.getElementById("image").value == 1) {
    newCards.image = "img/new-team-member-01.jpg";
  } else if (document.getElementById("image").value == 2) {
    newCards.image = "img/new-team-member-02.jpg";
  } else if (document.getElementById("image").value == 3) {
    newCards.image = "img/new-team-member-03.jpg";
  } else if (document.getElementById("image").value == 4) {
    newCards.image = "img/new-team-member-04.jpg";
  } else {
    newCards.image = "img/unknown-team-member.jpg";
  }
  newCards.name = document.getElementById("name").value;
  newCards.role = document.getElementById("role").value;
  teamCardDiv = document.createElement("div");
  teamCardDiv.setAttribute("class", "team-card");
  teamContainer.append(teamCardDiv);
//   console.log(teamCardDiv);
  teamCardDiv.innerHTML = `<div class="card-image">
<img
  src=${newCards.image}
  alt=${newCards.name}
/>
</div>
<div class="card-text">
<h3>${newCards.name}</h3>
<p>${newCards.role}</p>
</div>`;
});
