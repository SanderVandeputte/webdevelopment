const setup = () => {
    let text = document.getElementById("gegeven").textContent.toLowerCase();
    let teZoeken = "an";


    //-------------------------------------------------------------------------------------------------------------------------------//
    //  indexOf

    let aantalIndexOf = 0;
    let positieIndexOf = text.indexOf(teZoeken);
    let indexOfText = document.getElementById("indexOf");

    while (positieIndexOf > -1) {
        aantalIndexOf++
        positieIndexOf = text.indexOf(teZoeken, positieIndexOf + 1)
    }
    console.log(`indexOf: an komt ${aantalIndexOf} keer voor`)
    indexOfText.innerHTML = `<strong>indexOf:</strong> an komt <strong>${aantalIndexOf}</strong> keer voor`


    //-------------------------------------------------------------------------------------------------------------------------------//
    //  lastIndexOf

    let aantalLastIndexOf = 0;
    let positieLastIndexOf = text.lastIndexOf(teZoeken);
    let lastIndexOfText = document.getElementById("lastIndexOf");


    while (positieLastIndexOf > -1) {
        aantalLastIndexOf++
        positieLastIndexOf = text.lastIndexOf(teZoeken, positieLastIndexOf - 1)
    }
    console.log(`LastIndexOf: an komt ${aantalLastIndexOf} keer voor`)
    lastIndexOfText.innerHTML = `<strong>LastIndexOf:</strong> an komt <strong>${aantalLastIndexOf}</strong> keer voor`
}
window.addEventListener("load", setup)