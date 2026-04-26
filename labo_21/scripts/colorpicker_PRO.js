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