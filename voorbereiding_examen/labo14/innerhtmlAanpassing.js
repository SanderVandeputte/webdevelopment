const setup = () =>{


    let button = document.createElement("button")
    button.addEventListener("click", buttonInnerhtml)
    button.innerText = "inner HTML toepassen"
    document.body.appendChild(button)


}

const buttonInnerhtml = () =>{
    let PElement=  document.getElementById('txtOutput');
    PElement.innerHTML="Welkom!"
}

window.addEventListener("load", setup)