const setup = () =>{

    let vandaag = new Date()
    let vandaagInMiliseconds = vandaag.getTime()
    console.log("vandaag in milliseconds: " + vandaagInMiliseconds)

    let geboorte = new Date(2007, 5, 9)
    let geboorteInMiliseconds = geboorte.getTime()
    console.log("geboorte in milliseconds: " + geboorteInMiliseconds)


    let verschil = vandaagInMiliseconds - geboorteInMiliseconds;
    let output = Math.floor(verschil/(1000*60*60*24));
    console.log("verschil in dagen: " + output)
    let pElement = document.getElementById('dagenOpWereldbol');
    pElement.textContent = "Ik ben al " + output + " dagen op de wereldbol"
}
window.addEventListener("load", setup)