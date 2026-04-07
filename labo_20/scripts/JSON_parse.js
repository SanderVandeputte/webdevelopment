const setup = () => {

}

let student1 = "{\"voornaam\":\"Jan\",\"familienaam\":\"Janssens\",\"geboorteDatum\":\"1993-12-31T00:00:00.000Z\",\"adres\":{\"straat\":\"Kerkstraat 13\",\"postcode\":\"8500\",\"gemeente\":\"Kortrijk\"},\"isIngeschreven\":true,\"namenVanExen\":[\"Sofie\",\"Berta\",\"Philip\",\"Albertoooo\"],\"aantalAutos\":2}"




let JSONStudent1 = JSON.parse(student1);
console.log(JSONStudent1)
let p = document.getElementById('p');
p.textContent = JSONStudent1;





window.addEventListener("load", setup)