const setup = () =>{
    const alleDiv = document.getElementsByClassName('belangrijk');

    for (let i = 0; i < alleDiv.length; i++) {
        alleDiv[i].classList.add("opvallend");
    }

}

window.addEventListener("load", setup)