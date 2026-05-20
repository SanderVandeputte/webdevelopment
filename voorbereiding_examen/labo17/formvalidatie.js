const setup = () => {
    document.getElementById("btnValideer").addEventListener("click", valideerForm);
}

const valideerForm =() =>{
    resetFouten()

    valideerVoorNaam()
    valideerAchterNaam()
    valideerGeboorteDatum()
    valideerEmailAdres()
    valideerAantalKinderen()
}

const valideerVoorNaam = () =>{
    const voornaam = document.getElementById("voornaam");
    const voornaamValue = voornaam.value;
    const fout_voornaam = document.getElementById("fout-voornaam");
    if (voornaamValue.length > 30){
        voornaam.style.background = "red"
        console.log("Naam te lang")
        fout_voornaam.textContent = "Naam met niet langer dan 30 tekens zijn."
        fout_voornaam.style.color= "red"
        voornaam.value = ""
    }
}


const valideerAchterNaam = () =>{
    const familienaam = document.getElementById("familienaam");
    const familienaamValue = familienaam.value;
    const fout_familienaam = document.getElementById("fout-familienaam");

    if (familienaamValue === ""){
        familienaam.style.background = "red"
        fout_familienaam.textContent = "Verplicht veld"
        fout_familienaam.style.color= "red"

    } else if (familienaamValue.length > 50){
        familienaam.style.background = "red"
        fout_familienaam.textContent = "max 50 karakters"
        fout_familienaam.style.color= "red"

    }
}


const valideerGeboorteDatum = () =>{
    const geboorteDatum = document.getElementById("geboortedatum");
    const geboorteDatumValue = geboorteDatum.value;
    const fout_geboortedatum = document.getElementById("fout-geboortedatum");

    if (geboorteDatumValue === "") {
        geboorteDatum.style.background = "red"
        fout_geboortedatum.textContent = "Verplicht veld"
        fout_geboortedatum.style.color= "red"
    } else if (geboorteDatumValue.length !== 10 || geboorteDatumValue[4] !== "-" || geboorteDatumValue[7] !== "-" || isNaN(geboorteDatumValue.substring(0, 4)) || isNaN(geboorteDatumValue.substring(5, 7)) || isNaN(geboorteDatumValue.substring(8, 10))){
        geboorteDatum.style.background = "red"
        fout_geboortedatum.textContent = "formaat is niet jjjj-mm-dd"
        fout_geboortedatum.style.color= "red"
    }
}


const valideerEmailAdres = () =>{
    const emailAdres = document.getElementById("email");
    const emailAdresValue = emailAdres.value;
    const fout_emailAdres = document.getElementById("fout-email");


    if (emailAdresValue === ""){
        emailAdres.style.background = "red"
        fout_emailAdres.textContent= "verplicht veld"
        fout_emailAdres.style.color= "red"
    }

    const positie = emailAdresValue.indexOf("@");
    if (positie === -1 || positie !== emailAdresValue.lastIndexOf("@")){
        emailAdres.style.background = "red"
        fout_emailAdres.textContent= "Geen geldig email adres"
        fout_emailAdres.style.color= "red"
    }
    if (positie === 0 || positie === emailAdresValue.length - 1) {
        emailAdres.style.background = "red"
        fout_emailAdres.textContent= "Geen geldig email adres"
        fout_emailAdres.style.color= "red"
    }
}


const valideerAantalKinderen = () =>{
    const aantalKinderen = document.getElementById("aantalKinderen");
    const aantalKinderenValue = aantalKinderen.value;
    const fout_aantalKinderen = document.getElementById("fout-aantalKinderen");


    if (isNaN(aantalKinderenValue) || Number(aantalKinderenValue) < 0){
        aantalKinderen.style.background = "red"
        fout_aantalKinderen.style.color= "red"
        fout_aantalKinderen.textContent= "is geen positief getal"
    }
    if (Number(aantalKinderenValue) > 99){
        aantalKinderen.style.background = "red"
        fout_aantalKinderen.style.color= "red"
        fout_aantalKinderen.textContent= "is te vruchtbaar"
    }
}



const resetFouten = () => {
    // alle inputvelden terug normaal
    document.querySelectorAll("input").forEach(input => {
        input.style.background = "";
    });

    // alle foutmeldingen leegmaken
    document.querySelectorAll(".foutmelding").forEach(span => {
        span.textContent = "";
    });
};

window.addEventListener('load', setup)