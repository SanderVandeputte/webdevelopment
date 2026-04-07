let huidigeIndex = -1;
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

    valideer();

    let nieuwPersoon = {
        voornaam: document.getElementById("txtVoornaam").value,
        familienaam: document.getElementById("txtFamilienaam").value,
        geboorteDatum: new Date(document.getElementById("txtGeboorteDatum").value),
        email: document.getElementById("txtEmail").value,
        aantalKinderen: parseInt(document.getElementById("txtAantalKinderen").value),
    };

    if (huidigeIndex === -1) {
        personen.push(nieuwPersoon);    // nieuwe persoon
    } else {
        personen[huidigeIndex] = nieuwPersoon;  // persoon bewerken
    }

    toonPersonenInLijst(); // lijst updaten
};


const verwijderPersoon = () => {

}


const toonPersonenInLijst = () => {
    const lst = document.getElementById("lstPersonen");
    lst.innerHTML = "";


    personen.forEach((p, index) => {
        let option = document.createElement("option");
        option.textContent = p.voornaam + " " + p.familienaam;
        option.value = index;
        lst.appendChild(option);
    });
}

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");
    huidigeIndex = -1;

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.addEventListener("change", (e) => {
        let index = e.target.value;
        huidigeIndex = parseInt(index);
        let p = personen[huidigeIndex];

        document.getElementById("txtVoornaam").value = p.voornaam;
        document.getElementById("txtFamilienaam").value = p.familienaam;
        document.getElementById("txtGeboorteDatum").value = p.geboorteDatum.toISOString().substring(0, 10);
        document.getElementById("txtEmail").value = p.email;
        document.getElementById("txtAantalKinderen").value = p.aantalKinderen;
    });

    toonPersonenInLijst();
};

window.addEventListener("load", setup);