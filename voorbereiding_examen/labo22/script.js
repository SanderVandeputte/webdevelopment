let zoekopdrachten = [];

const setup = () =>{
    const button = document.getElementById('buttonSend');
    button.addEventListener('click', commandSend);

    // Load saved data
    zoekopdrachten = laadData();
    zoekopdrachten.forEach(h => createSwatches(h));
};

const valideer = () =>{
    const input = document.getElementById('input');
    let inputValue = input.value.trim();

    if (inputValue === ""){
        alert("Er is niks ingegeven");
        return null;
    }

    if (inputValue === "refresh"){
        localStorage.clear();
        location.reload();
        return null;
    }

    if (!inputValue.includes("/")){
        alert("Invalid command");
        return null;
    }

    if (!(
        inputValue.includes("/g") ||
        inputValue.includes("/y") ||
        inputValue.includes("/x") ||
        inputValue.includes("/i")
    )) {
        alert("Unknown command prefix");
        return null;
    }

    let prefix = inputValue.substring(0,2);
    let teZoeken = inputValue.substring(3).trim();

    if (teZoeken === "") {
        alert("Geen zoekterm ingegeven");
        return null;
    }

    let title = buildTitle(prefix);
    let url = buildUrl(prefix, teZoeken);

    return {
        title: title,
        tekst: teZoeken,
        url: url,
    };
};

const buildTitle = (prefix) =>{
    if (prefix === "/g") return "Google";
    if (prefix === "/y") return "YouTube";
    if (prefix === "/x") return "X";
    return "Instagram";
};

const buildUrl = (prefix, teZoeken) =>{
    let q = encodeURIComponent(teZoeken);

    if (prefix === "/g") return "https://www.google.com/search?q=" + q;
    if (prefix === "/y") return "https://www.youtube.com/results?search_query=" + q;
    if (prefix === "/x") return "https://x.com/hashtag/" + q;
    return "https://www.instagram.com/explore/tags/" + q + "/";
};

const laadData = () => {
    const raw = localStorage.getItem("zoekopdrachten");
    return raw ? JSON.parse(raw) : [];
};

const slaOp = () => {
    localStorage.setItem("zoekopdrachten", JSON.stringify(zoekopdrachten));
};

const naarLink = (url) =>{
    window.open(url);
};

const commandSend = () => {
    let result = valideer();
    if (result) {
        zoekopdrachten.push(result);
        slaOp();
        createSwatches(result);
        naarLink(result.url);
    }
};

const createSwatches = (h) =>{
    const swatch = document.createElement("div");
    const divSwatchesPlace = document.getElementById("swatchesSpace");

    const buttonNaarSite = document.createElement("button")
    swatch.append(buttonNaarSite)
    buttonNaarSite.textContent = "GO!";
    buttonNaarSite.addEventListener("click", () => naarLink(h.url));
    buttonNaarSite.style.width = "10px";
    buttonNaarSite.style.height = "10px";


    // --- TITEL ---
    const title = document.createElement("div");
    title.textContent = h.title;
    title.style.fontSize = "16px";
    title.style.fontWeight = "bold";
    title.style.marginBottom = "4px";

    // --- TEKST ---
    const tekst = document.createElement("div");
    tekst.textContent = h.tekst;
    tekst.style.marginBottom = "6px";





    swatch.style.width = "120px";
    swatch.style.height = "60px";
    swatch.style.margin = "5px";
    swatch.style.backgroundColor = "blue";
    swatch.style.color = "white";
    swatch.style.padding = "5px";
    swatch.style.fontSize = "12px";

    if (h.title === "Google"){
        swatch.style.backgroundColor = "blue";
        swatch.style.color = "white";
    } else if (h.title === "Youtube"){
        swatch.style.backgroundColor = "red";
        swatch.style.color = "white";
    } else if (h.title === "x"){
        swatch.style.backgroundColor = "black";
        swatch.style.color = "white";
    } else{
        swatch.style.backgroundColor = "orange";
        swatch.style.color = "black";
    }

    swatch.append(title);
    swatch.append(tekst);
    swatch.append(buttonNaarSite);

    divSwatchesPlace.appendChild(swatch);
};

window.addEventListener('load', setup);
