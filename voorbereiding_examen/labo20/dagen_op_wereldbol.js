const setup = () =>{

    const tekst = document.createElement("p")
    document.body.appendChild(tekst)

    let geboorte = new Date(2007, 6, 9)
    console.log(geboorte)

    let vandaag = new Date()
    console.log(vandaag)

    let aantalDagenOpWereld = (vandaag - geboorte)/(1000*60*60*24)
    console.log(aantalDagenOpWereld)

    tekst.textContent = "Ik ben al " + aantalDagenOpWereld +" dagen op deze wereldbol"
}
window.addEventListener('load', setup)