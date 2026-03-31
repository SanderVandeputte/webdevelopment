let global = {
// ── Globale constanten ─────────────────────────
    AANTAL_KAARTEN: 6,              // standaard 6 paren
    AANTAL_GELIJKE_KAARTEN: 2,      // standaard 2 kaarten gelijk te stellen

    AFBEELDINGEN: [                 // lijst met paden naar de afbeeldingen
        '../images/matching_game/kaart1.png',
        '../images/matching_game/kaart2.png',
        '../images/matching_game/kaart3.png',
        '../images/matching_game/kaart4.png',
        '../images/matching_game/kaart5.png',
        '../images/matching_game/kaart6.png',
        '../images/matching_game/kaart7.png',
        '../images/matching_game/kaart8.png',
        '../images/matching_game/kaart9.png',
        '../images/matching_game/kaart10.png',
    ],

    GELUID_GOED: new Audio('../sounds/sound_good.mp3'), // geluid bij juist antwoord
    GELUID_FOUT: new Audio('../sounds/sound_bad.mp3'),  // geluid bij fout antwoord
};

let omgedraaid = [];    // lijst van kaarten die momenteel omgedraaid zijn
let isBezig    = false; // true als spel even wacht
let gevonden   = 0; // aantal gevonden paren/trio


// ── Setup speelveld ────────────────────────────
const setup = () => {
    gevonden = 0;   //standaard gevonden bij start van spel = 0

    // beide radiobuttons overlopen om te weten of het duo's of trio's zijn die gezocht worden
    const radios = document.getElementsByName("aantal_kaarten");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            global.AANTAL_GELIJKE_KAARTEN = parseInt(radios[i].value);
        }
    }

    // Lees de slider uit om te weten hoeveel combinaties
    global.AANTAL_KAARTEN = parseInt(document.getElementById("kaarten-slider").value);
    // toon sliderwaarde naast de slider
    document.getElementById("kaarten-waarde").textContent = global.AANTAL_KAARTEN;


    const totaal   = global.AANTAL_KAARTEN * global.AANTAL_GELIJKE_KAARTEN; // totaal aantal kaarten in spel
    const kolommen = berekenKolommen(totaal);   // bereken beste aantal kolommen voor bovenstaand totaal

    const speelveld = document.getElementById("speelveld"); // speelveld ophalen
    speelveld.innerHTML = "";   // alle oude kaarten verwijderen
    speelveld.style.gridTemplateColumns = "repeat(" + kolommen + ", 110px)"; // grid instellen met berekend aantal kolommen

    let kaarten = [];       // verzameling van alle kaarten
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {   // loop over elke kaart
        for (let j = 0; j < global.AANTAL_GELIJKE_KAARTEN; j++) {   // voeg alle kaarten x keer toe
            kaarten.push(i);    // kaartnummer in verzameling steken
        }
    }
    kaarten = shuffle(kaarten);     // kaarten shufflen om op random plaats te zetten
    for (let i = 0; i < kaarten.length; i++) {
        speelveld.appendChild(maakKaart(kaarten[i]));   //maak een kaart en voeg toe aan speelveld
    }
    document.getElementById("bericht").textContent = "";    //verwijder winnaarsbericht
};


// shuffle methode om array willekeurig te sorteren
const shuffle = (array) =>
    array.sort(() => Math.random() - 0.5);

// methode om beste kolom te berekenen
const berekenKolommen = (totaal) => {
    const verhouding = window.innerWidth / window.innerHeight;  // verhouding scherm (breedte/hoogte)

    let besteKolommen = totaal; // beginwaarde: alles op één rij   
    let kleinsteVerschil = Infinity;    // beginwaarde: oneindig groot verschil
    
    for (let kolommen = 1; kolommen <= totaal; kolommen++) {    // probeer elk mogelijk aantal kolommen
        if (totaal % kolommen !== 0) continue;  // als er overblijvers zijn --> overslaan

        const rijen = totaal / kolommen;    // bereken aantal rijen
        const gridVerhouding = kolommen / rijen;    // verhouding van grid
        const verschil = Math.abs(gridVerhouding - verhouding); // verschil met schermverhouding

        if (verschil < kleinsteVerschil) {  // is dit beste verdeling tot nu toe?
            kleinsteVerschil = verschil;    // onthoud kleinste verschil
            besteKolommen    = kolommen;    // onthoud bijhorend aantal kolommen
        }
    }
    return besteKolommen;   // geef beste aantal kolommen weer
};

// kaarten aanmaken
const maakKaart = (index) => {
    const kaart = document.createElement("div"); // maak een div aan voor de kaarten
    kaart.className = "kaart"                                            // geef de div klasse "kaart"
    const img = document.createElement("img"); // maak een img voor de afbeeldingen
    img.src = global.AFBEELDINGEN[index];                               // afbeelding instellen op basis van index
    img.className = "voorkant";                                         // geef klasse "voorkant"
    kaart.appendChild(img);                                             // voe afbeelding to aan de kaart
    kaart.addEventListener("click", () => klikKaart(kaart, index)); // voeg een klik-listener toe
    return kaart;                                                       // geef kaart terug
};

// Wanneer op de kaart geklikt wordt
const klikKaart = (kaart, index) => {
    if (isBezig) return;                                            // doe niets als het spel bezig is
    if (kaart.classList.contains("omgedraaid")) return;             // doe niets als kaart al omgedraaid is
    if (kaart.classList.contains("gevonden")) return;               // doe niets als kaart al gevonden is
    kaart.classList.add("omgedraaid");                              // draai kaart om
    omgedraaid.push({ kaart: kaart, index: index });                // voeg kaart toe aan omgedraaide lijst
    if (omgedraaid.length === global.AANTAL_GELIJKE_KAARTEN) {      // als er genoeg kaarten omgedraaid zijn
        controleerMatch();                                          // controleren op match
    }
};

// controleren als er een match is
const controleerMatch = () => {
    isBezig = true;                                            // zorg dat er niet geklikt kan worden
    document.body.classList.add("bezet");                      // zet cursor op laden

    const eersteIndex = omgedraaid[0].index;                    // onthoud index van eerste kaart
    let gelijk = true;                                  // veronderstel alle kaarten gelijk zijn
    for (let i = 1; i < omgedraaid.length; i++) {       // loop over andere omgedraaide kaarten
        if (omgedraaid[i].index !== eersteIndex) {              // als kaart anders is dan eerste
            gelijk = false;                                     // niet gelijk
        }
    }

    if (gelijk) {                                               // als gelijk
        for (let i = 0; i < omgedraaid.length; i++) {
            omgedraaid[i].kaart.classList.add("goed");          // toon groene rand
        }
        global.GELUID_GOED.currentTime = 0;                     // geluid start vanaf begin
        global.GELUID_GOED.play();                              // geluid speelt af
        setTimeout(() => {                         // wacht voor kaarten terugdraaien
            for (let i = 0; i < omgedraaid.length; i++) {
                omgedraaid[i].kaart.classList.add("gevonden");  // kaarten verbergen
            }
            gevonden++;                                         // aantal gevonden omhoog met 1
            resetBeurt();                                       // reset de beurt
            if (gevonden === global.AANTAL_KAARTEN) {           // als alle paren gevonden zijn
                // toon winnaarsbericht
                document.getElementById("bericht").textContent = "Gefeliciteerd! Je hebt gewonnen!";
            }
        }, 500);                                        // wacht halve seconde
    } else {
        for (let i = 0; i < omgedraaid.length; i++) {
            omgedraaid[i].kaart.classList.add("fout");                  // toon rode rand rond de gekozen kaarten
        }
        global.GELUID_FOUT.currentTime = 0;                             // geluid start vanaf begin
        global.GELUID_FOUT.play();                                      // geluid speelt af
        setTimeout(() => {
            for (let i = 0; i < omgedraaid.length; i++) {
                omgedraaid[i].kaart.classList.remove("omgedraaid"); // draai kaart terug om
                omgedraaid[i].kaart.classList.remove("fout");       // verwijder rode rand weer
            }
            resetBeurt();                                               // reset de beurt
        }, 1000);                                               // wacht seconde
    }
};

// beurt resette,
const resetBeurt = () => {
    omgedraaid = [];                                    // maak lijst met omgedraaide kaarten leeg
    isBezig = false;                                    // je kan weer kaarten kiezen
    document.body.classList.remove("bezet");     // zet cursor normaal
};

// ── Radiobuttons starten setup direct ──────────
const radios = document.getElementsByName("aantal_kaarten");    // haal alle radiobuttons op
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", setup);        // start setup opnieuw bij elke wijziging
}

// ── Slider past aantal kaarten live aan ────────
document.getElementById("kaarten-slider").addEventListener("input", setup); // start setup opnieuw bij sliden


// spel starten
document.getElementById("nieuw_game_btn").addEventListener("click", setup); // klik op knop start nieuw spel
window.addEventListener("load", setup);                                              // start spel automatisch bij laden

