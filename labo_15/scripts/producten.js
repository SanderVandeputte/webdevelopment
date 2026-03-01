const setup = () => {
    const prijzen = document.getElementsByClassName("prijs");
    const aantallen = document.getElementsByClassName("aantal");
    const btwWaarde = document.getElementsByClassName("btw");
    const subtot = document.getElementsByClassName("subtotaal");
    const eindTotaal = document.getElementById("totaal");

    const herbereken = () => {
        let totaal = 0;

        for (let i = 0; i < prijzen.length; i++) {

            let prijsString = prijzen[i].textContent;
            let prijs = parseFloat(prijsString);
            let aantal = parseInt(aantallen[i].value);
            let btwString = btwWaarde[i].textContent;
            let btw = parseInt(btwString);
            let subtotaal = prijs * aantal * (1 + btw / 100);
            subtotaal = subtotaal.toFixed(2);
            subtot[i].textContent = subtotaal + " Eur";
            totaal += parseFloat(subtotaal);

        }
        eindTotaal.textContent = totaal.toFixed(2) + " Eur";
    };
    document.getElementById("herbereken").addEventListener("click", herbereken);
};
window.addEventListener("load", setup);