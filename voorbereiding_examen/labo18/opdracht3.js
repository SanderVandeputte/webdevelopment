const setup = () =>{
    const button = document.createElement("button");
    button.addEventListener("click", toevoegenP);
    button.innerText = "KLIK OP DE KNOP";
    document.body.appendChild(button);

}

const toevoegenP = () =>{
    const pElement = document.createElement("p");
    pElement.innerHTML = "Dit is het nieuw aangemaakte P element";
    document.querySelector("#myDIV").appendChild(pElement);
}

window.addEventListener("load", setup);