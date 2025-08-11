// Dog data array with teaser & description
const dogs = [
  {
    id: 1,
    name: "Everley",
    img: "images/everley.jpg",
    teaser: "2 years old, male",
    desc: "Everley is a 2 year old handsome boy with very high energy level. He needs an experienced dog handler who has lots of patience for this playful kid. Because he was previously abused by farm workers, it will take a while for him to trust his adopter. Patient adopters will find a loyal, loving companion.",
  },
  {
    id: 2,
    name: "Caramel",
    img: "images/caramel.jpg",
    teaser: "5 years old, male",
    desc: "Caramel is quiet and does best in a calm family without young kids or other dogs. Needs short walks only, great for a chill household.",
  },
  {
    id: 3,
    name: "Wang Wang",
    img: "images/wangwang.jpg",
    teaser: "5 years old, male",
    desc: "Wang Wang has been waiting… and waiting. This sweet boy is a Singapore Special with the gentlest heart — affectionate, loyal, and just longing for someone to finally choose him. He’s not asking for much. Just a warm bed, a kind hand, and someone to love him back. Could you be the one to end his wait?",
  },
  {
    id: 4,
    name: "Archie",
    img: "images/archie.jpg",
    teaser: "14 years old, male",
    desc: "Archie is a 14 year old chill boy who needs a loving home and patient family. He suffers from occasional vertigo but gives lots of love.",
  },
  {
    id: 6,
    name: "Kara",
    img: "images/kara.jpg",
    teaser: "15 months old, female",
    desc: "Zera's sister, she is the calm soul of the pair. Quiet, gentle, and always ready for a cuddle, she walks beautifully on leash and adores her humans. She’s the perfect companion for someone who appreciates peaceful moments and soulful eyes.",
  },
  {
    id: 7,
    name: "Zera",
    img: "images/zera.jpg",
    teaser: "8 months old, female",
    desc: "Kara's sister, she is a playful pup bursting with energy and curiosity. She’s still learning the ropes — including a little mouthing — but her zest for life is contagious. She’s a joy to watch and a delight to love.",
  },
  {
    id: 8,
    name: "Zera",
    img: "images/zera.jpg",
    teaser: "8 months old, female",
    desc: "Kara's sister, she is a playful pup bursting with energy and curiosity. She’s still learning the ropes — including a little mouthing — but her zest for life is contagious. She’s a joy to watch and a delight to love.",
 
  },
];

// Render dog cards dynamically with name + teaser only
const dogCardsContainer = document.getElementById("dogCards");

dogs.forEach((dog) => {
  const card = document.createElement("div");
  card.className = "col-md-4";

  card.innerHTML = `
    <div class="card shadow">
      <img src="${dog.img}" class="card-img-top" alt="${dog.name}" />
      <div class="card-body">
        <h5 class="card-title">${dog.name}</h5>
        <p class="card-text">
          <span>${dog.teaser || ''}</span>
          <span
            class="learn-more-arrow"
            data-bs-toggle="modal"
            data-bs-target="#dogModal"
            data-dog-id="${dog.id}"
            role="button"
            tabindex="0"
          >➜</span>
        </p>
      </div>
    </div>
  `;
  dogCardsContainer.appendChild(card);
});

// Modal population logic
const dogModal = document.getElementById("dogModal");
dogModal.addEventListener("show.bs.modal", (event) => {
  const button = event.relatedTarget;
  const dogId = button.getAttribute("data-dog-id");
  const dog = dogs.find((d) => d.id == dogId);

  if (dog) {
    document.getElementById("dogModalLabel").textContent = dog.name;
    const modalImg = document.getElementById("dogModalImg");
    modalImg.src = dog.img;
    modalImg.alt = dog.name;

    document.getElementById("dogModalDesc").textContent = dog.desc;
  }
});