let huidigeIndex = -1
let personen = [

    persoon1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum: new Date("1993-12-31"),
        email: "jan.janssens@gmail.com",
        aantalKinderen: 3,
    },

    persoon2 = {
        voornaam: "Sander",
        familienaam: "Vandeputte",
        geboorteDatum: new Date("2007-6-9"),
        email: "sander.vandeputte@student.vives.be",
        aantalKinderen: 0,
    }

];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten

    let nieuwePersoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam : document.getElementById("txtFamilienaam").value,
        geboorteDatum : new Date(document.getElementById("txtGeboorteDatum").value),
        email : document.getElementById("txtEmail").value,
        aantalKinderen : parseInt(document.getElementById("txtAantalKinderen").value),
    }

    if (huidigeIndex === -1){
        personen.push(nieuwePersoon);
    } else{
        personen[huidigeIndex] =  nieuwePersoon;
    }


    console.log(nieuwePersoon);

    toonPersonenInLijst()


};


const toonPersonenInLijst = () => {
    const lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";

    personen.forEach((p, index) => {
        let option = document.createElement("option");
        option.textContent = p.voornaam + " " + p.familienaam;
        option.value = index;
        lst.appendChild(option);
    });
};

const toonPersoonInForm = () => {
    const index = document.getElementById("lstPersonen").value;
    huidigeIndex = index;

    const p = personen[index];

    document.getElementById("txtVoornaam").value = p.voornaam;
    document.getElementById("txtFamilienaam").value = p.familienaam;
    document.getElementById("txtGeboorteDatum").value = p.geboorteDatum.toISOString().substring(0,10);
    document.getElementById("txtEmail").value = p.email;
    document.getElementById("txtAantalKinderen").value = p.aantalKinderen;
};



// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    const txtVoornaam = document.getElementById("txtVoornaam");
    txtVoornaam.value = "";
    const txtFamilienaam = document.getElementById("txtFamilienaam");
    txtFamilienaam.value = "";
    const txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    txtGeboorteDatum.value = "";
    const txtEmail = document.getElementById("txtEmail");
    txtEmail.value = "";
    const txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtAantalKinderen.value = "";
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", toonPersoonInForm);

    toonPersonenInLijst();
};

window.addEventListener("load", setup);