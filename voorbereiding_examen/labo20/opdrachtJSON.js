const setup = () =>{

    let student1 = {
        voornaam: "Sander",
        familienaam: "Vandeputte",
        geboortedatum: new Date(2007,6,9),
        adres: {
            straat: "Moenhage",
            postcode: "8552",
            gemeente: "Moen"
        },
        isIngeschreven: true,
        aantalAutos: 0
    }

    let JSONString = JSON.stringify(student1)
    console.log(JSONString)




    let studentJSONString = "{\"voornaam\":\"Sander\",\"familienaam\":\"Vandeputte\",\"geboortedatum\":\"2007-07-08T22:00:00.000Z\",\"adres\":{\"straat\":\"Moenhage\",\"postcode\":\"8552\",\"gemeente\":\"Moen\"},\"isIngeschreven\":true,\"aantalAutos\":0}"
    studentJSONString = JSON.parse(JSONString)
    console.log(studentJSONString)

}

window.addEventListener('load', setup);