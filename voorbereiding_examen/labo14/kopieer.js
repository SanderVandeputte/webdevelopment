const setup = () =>{

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);

}


const kopieer = () =>{
    let output = document.getElementById("txtOutput")
    let txtInput = document.getElementById("txtInput");
    let tekst = txtInput.value;
    output.innerHTML = tekst;
    console.log(tekst);
}

window.addEventListener("load", setup)