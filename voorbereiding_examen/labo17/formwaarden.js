const setup = () =>{
    document.getElementById('button').addEventListener('click', toonResult)
}

const toonResult = () =>{


    let isRoker = document.getElementById('isRoker').checked

    let moedertaal  = document.getElementsByName('moedertaal')
    let gekozenMoedertaal = ""
    for (let i = 0; i < moedertaal.length; i++) {
        if (moedertaal[i].checked){
            gekozenMoedertaal = moedertaal[i].value
        }
    }


    let favorieteBuurland = document.getElementById('favoBuurland').value


    let bestelling = document.getElementById('bestelling')
    const bestellingArray = []
    for (let i = 0; i < bestelling.options.length; i++) {
        if (bestelling.options[i].selected){
            bestellingArray.push(bestelling.options[i].value)
        }
    } console.log("bestellingArray", bestellingArray)



    let result = document.createElement('p')
    document.body.appendChild(result)

    result.innerHTML += "Is roker: " + isRoker + "<br>" +
                        "Moedertaal: " + gekozenMoedertaal + "<br>" +
                        "Buurland: " + favorieteBuurland + "<br>" +
                        "Bestelling: " + bestellingArray.join(", ") +  "<br>"

}

window.addEventListener("load", setup)