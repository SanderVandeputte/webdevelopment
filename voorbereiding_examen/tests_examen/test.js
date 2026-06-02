const setup = () =>{

    let lijn = document.createElement("hr");


    document.body.appendChild(lijn);


    let titelDubbelvsEnkelAanhalingsteken = document.createElement('h1');
    document.body.appendChild(titelDubbelvsEnkelAanhalingsteken);
    titelDubbelvsEnkelAanhalingsteken.textContent = "Dubbel vs Enkele aanhalingstekens";

    let tekstMetDubbeleAanhalingsteken = "Don't you forget about me"
    let pElement1 = document.createElement("p");
    document.body.appendChild(pElement1);
    pElement1.textContent = tekstMetDubbeleAanhalingsteken;

    let tekstMetEnkeleAanhalingsteken = "Don't you forget about me"
    let pElement2 = document.createElement("p");
    document.body.appendChild(pElement2);
    pElement2.textContent = tekstMetEnkeleAanhalingsteken;


    document.body.appendChild(lijn);


    let titelStringFuncties = document.createElement('h1');
    document.body.appendChild(titelStringFuncties);
    titelStringFuncties.textContent = "String functies";
    let tekstLength = "Dit is een tekst."
    let lengthToegepast = tekstLength.length;
    let pLength = document.createElement("p");
    document.body.appendChild(pLength);
    pLength.textContent = "De lengte van de zin 'Dit is een tekst.' is: " + lengthToegepast + " characters.";


    let pCharAt = document.createElement("p");
    document.body.appendChild(pCharAt);
    pCharAt.textContent = "'Vives'.charAt(1): " + 'Vives'.charAt(1);


    let vraag = "Wat was was eer was was was?"
    let pIncludes1 = document.createElement('p');
    document.body.appendChild(pIncludes1);
    pIncludes1.textContent = "vraag.includes('was') geeft het volgende weer: " + vraag.includes('was') + ". Dit is zo omdat de vraag het volgende is 'Wat was was eer was was was?'";

    let pIncludes2 = document.createElement('p');
    document.body.appendChild(pIncludes2);
    pIncludes2.textContent = "vraag.includes('was', 5) geeft het volgende weer: " + vraag.includes('was', 5) + ". Dit is zo omdat de vraag het volgende is 'Wat was was eer was was was?' Die 5 is vanaf welke index hij kijkt";

    let pIndexOf1 = document.createElement('p');
    document.body.appendChild(pIndexOf1);
    pIndexOf1.textContent = "vraag.indexOf('was') geeft het volgende weer: " + vraag.indexOf('was') + ". Dit is zo omdat de vraag het volgende is 'Wat was was eer was was was?' De eerste keer dat was voorkomt is op deze index De eerste keer dat 'was' voorkomt start het woord op index 4";

    let pIndexOf2 = document.createElement('p');
    document.body.appendChild(pIndexOf2);
    pIndexOf2.textContent = "vraag.indexOf('was', 5) geeft het volgende weer: " + vraag.indexOf('was', 5) + ". Dit is zo omdat de vraag het volgende is 'Wat was was eer was was was?' De eerste keer dat was voorkomt is op deze index De eerste keer dat 'was' voorkomt start het woord op index 8";


    let pLastIndexOf1 = document.createElement('p');
    document.body.appendChild(pLastIndexOf1);
    pLastIndexOf1.textContent = "vraag.lastIndexOf('was') geeft het volgende weer: " + vraag.lastIndexOf('was') + ". Dit is zo omdat de vraag het volgende is 'Wat was was eer was was was?' De laatste keer dat was voorkomt is op deze index De eerste keer dat 'was' voorkomt start het woord op index 24";

    let pLastIndexOf2 = document.createElement('p');
    document.body.appendChild(pLastIndexOf2);
    pLastIndexOf2.textContent = "vraag.lastIndexOf('was', 5) geeft het volgende weer: " + vraag.lastIndexOf('was', 5) + ". Dit is zo omdat de vraag het volgende is 'Wat was was eer was was was?' De laatste keer dat was voorkomt is op deze index De eerste keer dat 'was' voorkomt start het woord op index 4";

    let zinReplace = "hondjes zijn mijn lievelingsdieren, ik heb zelf een hond.";
    let replace = document.createElement('p')
    document.body.appendChild(replace);
    replace.textContent = "zinReplace.replace('hond', 'kat') geeft dit weer: " + zinReplace.replace('hond', 'kat') + ". De originele zin was 'hondjes zijn mijn lievelingsdieren, ik heb zelf een hond.' replace vervangt alleen de eerste keer dat het tegengekomen wordt";

    let replaceAll = document.createElement('p')
    document.body.appendChild(replaceAll);
    replaceAll.textContent = "zinReplace.replaceAll('hond', 'kat') geeft dit weer: " + zinReplace.replaceAll('hond', 'kat') + ". De originele zin was 'hondjes zijn mijn lievelingsdieren, ik heb zelf een hond.' replaceAll vervangt alle keren dat het tegengekomen wordt";



    document.body.appendChild(lijn);


    for (let i = 0; i < 4; i++) {
        let p = document.createElement("p");
        p.setAttribute("class", "pSelect");
        p.textContent = "Paragraaf " + (i + 1);
        document.body.appendChild(p);
    }

    let pElementen = document.getElementsByClassName("pSelect")
    for (let p of pElementen) {
        p.addEventListener("click", veranderKleur)
    }






}

const veranderKleur = (event) => {

    let p = event.currentTarget;

    if (p.style.color === "black") {
        p.style.color = "red";
    } else{
        p.style.color = "black";
    }

}



window.addEventListener('load', setup)