const setup = () => {

}

let student1 = {
    voornaam : "Jan",
    familienaam : "Janssens",
    geboorteDatum : new Date("1993-12-31"),
    adres : {
        straat : "Kerkstraat 13",
        postcode : "8500",
        gemeente : "Kortrijk"
    },
    isIngeschreven : true,
    namenVanExen :
        ["Sofie", "Berta", "Philip", "Albertoooo"],
    aantalAutos : 2
}


let stringStudent1 = JSON.stringify(student1);
console.log(stringStudent1)
let p = document.getElementById('p');
p.textContent = stringStudent1;


window.addEventListener("load", setup)