// ---------------------------
// 1) SETUP
// ---------------------------

const setup = () => {
    const btnGo = document.getElementById("buttonSend");
    btnGo.addEventListener("click", voerCommandoUit);

    const history = JSON.parse(localStorage.getItem("vives.be.history"));

    if (history) {
        history.forEach(item => {
            createCard(item.title, item.text, item.url);
        });
    }
};

window.addEventListener("load", setup);


// ---------------------------
// 2) COMMANDO VERWERKEN
// ---------------------------

const voerCommandoUit = () => {
    const input = document.getElementById("input");   // <-- ID gefixt
    const command = input.value.trim();

    const regex = /^\/[a-z] .+$/i;

    if (!regex.test(command)) {
        alert("Invalid command");
        return;
    }

    const prefix = command.substring(0, 2);   // "/g"
    const zoekterm = command.substring(3);    // na "/g "

    if (prefix === "/g") google(zoekterm);
    else if (prefix === "/y") youtube(zoekterm);
    else if (prefix === "/x") x(zoekterm);
    else if (prefix === "/i") instagram(zoekterm);
    else alert("Unknown prefix");

    input.value = "";
};


// ---------------------------
// 3) PLATFORM FUNCTIES
// ---------------------------

const google = (term) => {
    const url = "https://www.google.com/search?q=" + term;
    window.open(url, "_blank");
    createCard("Google", term, url);
    saveHistory("Google", term, url);
};

const youtube = (term) => {
    const url = "https://www.youtube.com/results?search_query=" + term;
    window.open(url, "_blank");
    createCard("Youtube", term, url);
    saveHistory("Youtube", term, url);
};

const x = (term) => {
    const url = "https://x.com/hashtag/" + term;
    window.open(url, "_blank");
    createCard("X", term, url);
    saveHistory("X", term, url);
};

const instagram = (term) => {
    const url = "https://www.instagram.com/explore/tags/" + term;
    window.open(url, "_blank");
    createCard("Instagram", term, url);
    saveHistory("Instagram", term, url);
};


// ---------------------------
// 4) LOCAL STORAGE OPSLAAN
// ---------------------------

const saveHistory = (title, text, url) => {
    const item = { title, text, url };

    let history = JSON.parse(localStorage.getItem("vives.be.history"));
    if (!history) history = [];

    history.push(item);

    localStorage.setItem("vives.be.history", JSON.stringify(history));
};


// ---------------------------
// 5) KAARTJE MAKEN
// ---------------------------

const createCard = (title, text, url) => {

    // kolom
    const col = document.createElement("div");
    col.style.width = "300px";
    col.style.margin = "10px";
    col.style.display = "inline-block";

    // card
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "8px";
    card.style.padding = "15px";
    card.style.backgroundColor = "#f8f8f8";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    card.style.marginBottom = "10px";

    // card-body
    const body = document.createElement("div");

    // titel
    const cardTitle = document.createElement("h5");
    cardTitle.textContent = title;
    cardTitle.style.fontSize = "20px";
    cardTitle.style.marginBottom = "8px";

    // tekst
    const cardText = document.createElement("p");
    cardText.textContent = text;
    cardText.style.fontSize = "16px";
    cardText.style.marginBottom = "12px";

    // Go-knop
    const btn = document.createElement("a");
    btn.href = url;
    btn.target = "_blank";
    btn.textContent = "Go!";
    btn.style.display = "inline-block";
    btn.style.padding = "6px 12px";
    btn.style.backgroundColor = "#007bff";
    btn.style.color = "white";
    btn.style.borderRadius = "4px";
    btn.style.textDecoration = "none";
    btn.style.fontWeight = "bold";

    // kleur per platform
    if (title === "Google") {
        card.style.backgroundColor = "#e8f0fe";
    } else if (title === "Youtube") {
        card.style.backgroundColor = "#ffe5e5";
    } else if (title === "X") {
        card.style.backgroundColor = "#e0e0e0";
    } else if (title === "Instagram") {
        card.style.backgroundColor = "#fff0e6";
    }

    // opbouw
    body.appendChild(cardTitle);
    body.appendChild(cardText);
    body.appendChild(btn);

    card.appendChild(body);
    col.appendChild(card);

    document.getElementById("swatchesSpace").appendChild(col);
};

