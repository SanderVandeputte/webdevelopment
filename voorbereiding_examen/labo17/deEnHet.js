const setup = () =>{

    const output = document.getElementById("output");

    const tekst = document.getElementById('tekst').textContent.trim().toLowerCase();
    console.log(tekst);
    let resultaat = "";

    for (let i = 0; i < tekst.length; i++){
        if (tekst[i] === "d" && tekst[i+1] === "e"){
            resultaat += "het"
            i++;
        } else{
            resultaat += tekst[i]
        }
    }
   resultaat = resultaat[0].toUpperCase() + resultaat.slice(1, resultaat.length);
    console.log(resultaat);
    output.style.fontWeight = "bold";
    output.textContent = resultaat;
}

window.addEventListener("load", setup)