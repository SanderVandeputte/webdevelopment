const global ={
    huidigeKleur: "rgb(128, 128, 128)"
}

let redSlider, greenSlider, blueSlider
let redValue, greenValue, blueValue
let colorBox

const setup = () => {
    redSlider = document.getElementById('redSlider');
    greenSlider = document.getElementById('greenSlider');
    blueSlider = document.getElementById('blueSlider');

    redValue = document.getElementById('spanRed');
    greenValue = document.getElementById('spanGreen');
    blueValue = document.getElementById('spanBlue');

    colorBox = document.getElementById("color-box");


    localStorage.getItem("kleur")
    let opgeslagenKleuren = JSON.parse(localStorage.getItem("kleuren")) || [];

// voor elke opgeslagen kleur een swatch maken
    opgeslagenKleuren.forEach(kleur => {
        maakSwatchVanKleur(kleur);
    });


    const saveButton = document.getElementById("save")
        saveButton.addEventListener("click", maakSwatch);





    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);


    updateColor()

}


const maakSwatchVanKleur = (kleur) => {
    const swatches = document.getElementById("swatches");
    const swatch = document.createElement("div");
    swatch.addEventListener("click", swatchKlik);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.color = "red";
    deleteBtn.style.float = "right";
    deleteBtn.addEventListener("click", deleteKleur);

    swatch.appendChild(deleteBtn);
    swatch.style.width = "100px";
    swatch.style.height = "100px";
    swatch.style.margin = "10px";
    swatch.style.border = "1px solid #000";
    swatch.style.backgroundColor = kleur;

    swatches.appendChild(swatch);
};



const updateColor = () => {

    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    global.huidigeKleur = "rgb(" + red + ", " + green + ", " + blue + ")"

    //console.log("rgb(" + red + "," + green + "," + blue + ")")

    //console.log(global.huidigeKleur);


    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    colorBox.style.backgroundColor = global.huidigeKleur;
}


const maakSwatch = () => {
    const swatches = document.getElementById("swatches");
    const swatch = document.createElement("div");
    swatch.addEventListener("click", swatchKlik)
    const kleur = global.huidigeKleur;
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", deleteKleur);


    let kleuren = JSON.parse(localStorage.getItem("kleuren")) || [];
    kleuren.push(global.huidigeKleur);
    localStorage.setItem("kleuren", JSON.stringify(kleuren));
    console.log("localstorage: ", kleuren);



    swatch.appendChild(deleteBtn);
    deleteBtn.textContent = "X";
    deleteBtn.style.color= "red";
    deleteBtn.style.right;
    deleteBtn.style.float = "right";

    swatches.appendChild(swatch);
    swatch.style.width = "100px";
    swatch.style.height = "100px";
    swatch.style.margin = "10px";
    swatch.style.border = "1px solid #000";
    swatch.style.backgroundColor = kleur;

    console.log(kleur);
}



const deleteKleur = (event) =>{
    console.log("deleteKleur");

    const swatch = event.target.parentElement;   // het div-blokje
    swatch.remove();

    let kleuren = JSON.parse(localStorage.getItem("kleuren")) || [];
    const kleur = event.target.parentElement.style.backgroundColor;

    kleuren = kleuren.filter(k => k !== kleur);
    localStorage.setItem("kleuren", JSON.stringify(kleuren));


}


const swatchKlik=(event) =>{
    console.log("swatchKlik");
    const kleur = event.currentTarget.style.backgroundColor;

    const parts = kleur.replace("rgb(", "").replace(")", "").split(",");

    redSlider.value = parts[0].trim()
    greenSlider.value = parts[1].trim()
    blueSlider.value = parts[2].trim()

    const color_box = document.getElementById("color-box")
    color_box.style.backgroundColor = kleur;

    global.huidigeKleur = kleur;
    updateColor();
}


window.addEventListener('load', setup);