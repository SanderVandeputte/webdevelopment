const setup = () =>{

    let btnVerzenden = document.getElementById('verzenden')
    btnVerzenden.addEventListener('click', maakMetSpaties)

}

const maakMetSpaties = () => {

    let string = document.getElementById('input').value;
    let gesplitst = string.split("").join(" ");

    let PElement = document.createElement("p")
    document.body.appendChild(PElement)
    PElement.textContent = gesplitst
    console.log(PElement)

}


window.addEventListener('load', setup);