
let array = ["Sander", "Jasper", "Lucas", "Lieven", "Stefanie"]


const setup = () =>{

    let button = document.createElement("button")
    button.textContent = "Voeg naam toe"
    button.addEventListener("click", VoegNaamToe)
    document.body.appendChild(button);

    console.log(array.length);
    console.log(array[0]);
    console.log(array[2]);
    console.log(array[4]);
    console.log("Nu gaan we een extra naam toevoegen");
    let stringArray = array.toString();
    console.log("Array als string: " + stringArray);
}

const VoegNaamToe = () =>{
    let extraNaam = prompt("Voeg naam toe");

    array.push(extraNaam);
    console.log(array)
}



window.addEventListener("load", setup)