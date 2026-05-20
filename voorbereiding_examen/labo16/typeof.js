const setup = () =>{

    const leeftijdP = document.getElementById("leeftijd");
    const intrestP = document.getElementById("intrest");
    const gevaarlijk = document.getElementById("isGevaarlijk");
    const today = document.getElementById("vandaag");
    const printP = document.getElementById("print");

    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk = true;
    let vandaag = new Date();
    const print = (message) => {
        console.log(message);
    }

    console.log(typeof leeftijd);
    console.log(typeof intrest);
    console.log(typeof isGevaarlijk);
    console.log(typeof vandaag);
    console.log(typeof print);

    leeftijdP.textContent = typeof leeftijd;
    intrestP.textContent = typeof intrest;
    gevaarlijk.textContent = typeof isGevaarlijk;
    today.textContent = typeof vandaag;
    printP.textContent = typeof print;

}

window.addEventListener('load', setup)