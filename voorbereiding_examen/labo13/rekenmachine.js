const setup = () =>{
    let btnOptellen=document.getElementById("plus");
    let btnaftrekken=document.getElementById("min");
    let btnmaal = document.getElementById("maal");
    let btnDelen = document.getElementById("delen");

    btnOptellen.addEventListener("click", optellen)
    btnaftrekken.addEventListener("click", aftrekken)
    btnmaal.addEventListener("click", vermenigvuldigen)
    btnDelen.addEventListener("click", delen)
}

const optellen = () =>{
    let getal1 = document.getElementById("getal1").value;
    let getal2 = document.getElementById("getal2").value;
    let output = document.getElementById("output");

    let berekening = parseInt(getal1) + parseInt(getal2);

    output.textContent = getal1 + " + " + getal2 + " = " + berekening;
}

const aftrekken = () =>{
    let getal1 = document.getElementById("getal1").value;
    let getal2 = document.getElementById("getal2").value;
    let output = document.getElementById("output");

    let berekening = parseInt(getal1) - parseInt(getal2);

    output.textContent = getal1 + " - " + getal2 + " = " + berekening;
}

const vermenigvuldigen = () =>{
    let getal1 = document.getElementById("getal1").value;
    let getal2 = document.getElementById("getal2").value;
    let output = document.getElementById("output");

    let berekening = parseInt(getal1) * parseInt(getal2);

    output.textContent = getal1 + " * " + getal2 + " = " + berekening;
}

const delen = () =>{
    let getal1 = document.getElementById("getal1").value;
    let getal2 = document.getElementById("getal2").value;
    let output = document.getElementById("output");

    let berekening = parseInt(getal1) / parseInt(getal2);

    output.textContent = getal1 + " : " + getal2 + " = " + berekening;
}

window.addEventListener('load', setup)