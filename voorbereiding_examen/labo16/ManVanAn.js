const setup = () =>{
    let tekst = document.getElementById("zin").innerText.toLowerCase();
    let teZoeken = "an"
    let aantalIndexOf = 0;
    let positieIndexOf = tekst.indexOf(teZoeken)
    let output = document.getElementById("output");


    while (positieIndexOf > -1) {
        aantalIndexOf++;
        positieIndexOf = tekst.indexOf(teZoeken, positieIndexOf + 1)
    }
    console.log(`indexOf: an komt ${aantalIndexOf} keer voor`)
    output.innerHTML = `<strong>indexOf:</strong> an komt <strong>${aantalIndexOf}</strong> keer voor`
}

window.addEventListener("load", setup);