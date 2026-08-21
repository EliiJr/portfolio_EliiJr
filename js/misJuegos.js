const juegos = [
    {
        title: "Help Me Breathe",
        cover: "/../img/helpMeBreathe.png",
        tags: ["Casual", "Corto", "Global Game Jam"],
        url: "https://cristiansisoy.itch.io/help-me-breathe"
    },
    {
        title: "TRANSitando",
        cover: "/../img/transitando.png",
        tags: ["Novela Visual", "Pixel Art", "Women in Game Jam"],
        url: "https://frijol-pera.itch.io/transitando"
    },
    {
        title: "But They Fly",
        cover: "/../img/ButTheyFly.png",
        tags: ["Casual", "Corto", "Salta Game Jam"],
        url: "https://cristiansisoy.itch.io/but-they-fly"
    },
];

function renderCards(list){
    const carousel = document.getElementById("carruselJuegos");
    if(!carousel) return;

    carousel.innerHTML = "";
    list.forEach (g => {
        const card = document.createElement("a");
        card.className = "card-juego";
        card.href = g.url;
        card.target = "_blank";
        card.rel = "noopener";
        card.innerHTML = `
            <div class="card-juego-img-wrap">
                <img src="${g.cover}" alt="${g.title}">
            </div>
            <div class="card-juego-body">
                <div class="card-juego-title">${g.title}<span class="itch-badge">itch.io</span></div>
                <div>
                ${g.tags.map(t => `<span class="tag-pill">${t}</span>`).join("")}
                </div>
            </div>
        `;
        carousel.appendChild(card);
    })
}

document.addEventListener("DOMContentLoaded", () => {
    renderCards(juegos);
});