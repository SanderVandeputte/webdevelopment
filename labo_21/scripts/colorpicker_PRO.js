/*
const global = {
    huidigeKleur: "rgb(128, 128, 128)"
};

const initialize = () => {
    let opgeslagenKleuren = [];
    const opgeslagen = localStorage.getItem("kleuren");
    if (opgeslagen !== null) {
        opgeslagenKleuren = JSON.parse(opgeslagen);
    }    opgeslagenKleuren.forEach(kleur => voegSwatchToe(kleur));


    document.querySelectorAll(".slider").forEach(slider => {
        slider.addEventListener("input", update);
    });

    document.getElementById("btnSave").addEventListener("click", saveSwatch);

    update();
};

const saveSwatch = () => {
    voegSwatchToe(global.huidigeKleur);

    let opgeslagenKleuren = [];
    const opgeslagen = localStorage.getItem("kleuren");
    if (opgeslagen !== null) {
        opgeslagenKleuren = JSON.parse(opgeslagen);
    }

    opgeslagenKleuren.push(global.huidigeKleur);
    localStorage.setItem("kleuren", JSON.stringify(opgeslagenKleuren));
    console.log(opgeslagenKleuren);
};

const voegSwatchToe = (kleur) => {
    const [r, g, b] = kleur.replace("rgb(", "").replace(")", "").split(", ");

    const swatch = document.createElement("div");
    swatch.className = "swatch";
    swatch.style.background = kleur;
    swatch.setAttribute("data-red", r);
    swatch.setAttribute("data-green", g);
    swatch.setAttribute("data-blue", b);

    swatch.addEventListener("click", setColorPickerFromSwatch);

    const btnDelete = document.createElement("input");
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    swatch.appendChild(btnDelete);
    document.getElementById("swatchComponents").appendChild(swatch);
};

const setColorPickerFromSwatch = (event) => {
    const swatch = event.currentTarget;
    document.getElementById("sldRed").value   = swatch.getAttribute("data-red");
    document.getElementById("sldGreen").value = swatch.getAttribute("data-green");
    document.getElementById("sldBlue").value  = swatch.getAttribute("data-blue");
    update();
};

const deleteSwatch = (event) => {
    event.stopPropagation();
    const swatch = event.target.parentNode;

    let opgeslagenKleuren = [];
    const opgeslagen = localStorage.getItem("kleuren");
    if (opgeslagen !== null) {
        opgeslagenKleuren = JSON.parse(opgeslagen);
    }

    const kleur = swatch.style.background;
    const index = opgeslagenKleuren.indexOf(kleur);
    if (index !== -1) opgeslagenKleuren.splice(index, 1);
    localStorage.setItem("kleuren", JSON.stringify(opgeslagenKleuren));
    console.log(opgeslagenKleuren);

    swatch.remove();
};

const update = () => {
    const red   = document.getElementById("sldRed").value;
    const green = document.getElementById("sldGreen").value;
    const blue  = document.getElementById("sldBlue").value;

    document.getElementById("lblRed").innerHTML   = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML  = blue;

    const kleur = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("swatch").style.background = kleur;
    global.huidigeKleur = kleur;
};

window.addEventListener("load", initialize);
*/







































const global = {
    huidigKleur: "rgb(128, 128, 128)",
}

let opgeslagenKleuren = [];

const setup = () =>{

    const saveBtn = document.getElementById("btnSave");
    saveBtn.addEventListener("click", makeSwatch)


    document.querySelectorAll(".slider").forEach(slider => {
        slider.addEventListener("input", updateColor);
    });

    document.getElementById("btnSave").addEventListener("click", makeSwatch);


    updateColor()


    const opgeslagen = localStorage.getItem("kleur");

    // 2. omzetten naar array (of lege array)
    if (opgeslagen !== null) {
        opgeslagenKleuren = JSON.parse(opgeslagen);
    } else {
        opgeslagenKleuren = [];
    }


    for (let i = 0; i < opgeslagenKleuren.length; i++) {
        let kleur = opgeslagenKleuren[i];
        maakSwatchVanKleur(kleur);
    }





}

const updateColor = () =>{
    const redSlider = document.getElementById("sldRed").value;
    const greenSlider = document.getElementById("sldGreen").value;
    const blueSlider = document.getElementById("sldBlue").value;

    const kleur = "rgb(" + redSlider + ", " + greenSlider + ", " + blueSlider + ")"
    global.huidigKleur = kleur;
    //console.log(global.huidigKleur);
    const swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = kleur;

}

const maakSwatchVanKleur = (kleur) => {
    const nieuweSwatch = document.createElement("div");
    const swatchContainer = document.getElementById("swatchComponents");

    nieuweSwatch.className = "swatch";
    nieuweSwatch.style.height = "75px";
    nieuweSwatch.style.width = "75px";
    nieuweSwatch.style.margin = "5px";
    nieuweSwatch.style.backgroundColor = kleur;

    nieuweSwatch.addEventListener("click", klikSwatch);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.color = "red";
    deleteBtn.style.float = "right";
    deleteBtn.addEventListener("click", verwijderSwatch);

    nieuweSwatch.appendChild(deleteBtn);
    swatchContainer.appendChild(nieuweSwatch);
};

const makeSwatch = () =>{
    // DOM-swatch maken
    maakSwatchVanKleur(global.huidigKleur);

    // kleur opslaan in array
    opgeslagenKleuren.push(global.huidigKleur);

    // array opslaan in localStorage
    localStorage.setItem("kleur", JSON.stringify(opgeslagenKleuren));
}


const verwijderSwatch = (event) => {
    event.stopPropagation();

    const swatch = event.target.parentElement;

    // 1. Alle swatches ophalen
    const alleSwatches = Array.from(document.querySelectorAll("#swatchComponents div"));

    // 2. Index bepalen van de aangeklikte swatch
    const index = alleSwatches.indexOf(swatch);

    // 3. Verwijderen uit array
    if (index !== -1) {
        opgeslagenKleuren.splice(index, 1);
    }

    // 4. Opslaan in localStorage
    localStorage.setItem("kleur", JSON.stringify(opgeslagenKleuren));

    // 5. Verwijderen uit DOM
    swatch.remove();
};



const klikSwatch = (event) =>{
    let kleur = event.target.style.backgroundColor;
    //console.log(kleur);
    const kleurBlok = document.getElementById("swatch");
    global.huidigKleur = kleur;

    console.log(global.huidigKleur);

    kleurBlok.style.backgroundColor = global.huidigKleur;
}


window.addEventListener("load", setup);