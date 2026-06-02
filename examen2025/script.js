//GlOBAL VARIABLE
const global =
    {
        gebruiker: document.getElementById("message-sender").value,
        alleberichten: [],
        intervalID: 0
    }
const setup = () => {
    beginsituatie()
    let verstuurButton = document.getElementById("send-button");
    verstuurButton.addEventListener("click", berichtToevoegen)
    let alleswisbtn = document.getElementById("clear-all");
    alleswisbtn.addEventListener("click", alleswissen)
    let persoon = document.getElementById("message-sender")
    persoon.addEventListener("change", wissel)
    global.intervalID = setInterval(checkOpNieuweBerichten, 1000);


}

const checkOpNieuweBerichten = () => {
    const opslag = localStorage.getItem("opslag");
    if (!opslag) return;

    const nieuweArray = JSON.parse(opslag);

    // Als de lengte verschilt → er is iets veranderd
    if (nieuweArray.length !== global.alleberichten.length) {
        wissel(); // hertekent alles + past kleuren aan
    }
};


const berichtToevoegen = () => {

    let mes = document.getElementById("message-input").value;

    if (mes.trim() !== "") {

        let bericht =
            {
                naam: document.getElementById("message-sender").value,
                message: document.getElementById("message-input").value,
                tijd: datumNuOpvragen()
            }
        berichtAanmaken(bericht);
        arrayVernieuwen()
        updateBerichtenVoorGebruiker();

    }
    document.getElementById("message-input").value = "";
    document.getElementById("message-input").focus()
}

const berichtAanmaken = (bericht) => {
    let div = document.createElement("div");
    div.classList.add("message");
    div.textContent = bericht.message;

    let sender = document.createElement("span");
    sender.classList.add("sender");
    sender.textContent = bericht.naam;
    div.insertBefore(sender, div.firstChild);

    let time = document.createElement("span");
    time.classList.add("timestamp");
    time.textContent = bericht.tijd;
    div.insertBefore(time, div.firstChild);

    document.getElementById("chat-box").prepend(div);
};


const updateBerichtenVoorGebruiker = () => {
    const huidige = document.getElementById("message-sender").value;
    const berichten = document.querySelectorAll("#chat-box .message");

    for (let i = 0; i < berichten.length; i++) {
        const div = berichten[i];
        const senderSpan = div.querySelector(".sender");

        // naam is de tekst van de sender-span ZONDER de knop
        const naam = senderSpan.firstChild.textContent || senderSpan.textContent;

        // bestaande knop (als die er is)
        const bestaandeKnop = senderSpan.querySelector("button");

        if (naam === huidige) {
            div.classList.add("same-user");

            // als er nog geen knop is → toevoegen
            if (!bestaandeKnop) {
                const btn = document.createElement("button");
                btn.addEventListener("click", enkelBerichtVerwijderen);
                senderSpan.appendChild(btn);
            }
        } else {
            div.classList.remove("same-user");

            // knop verwijderen als die er is
            if (bestaandeKnop) {
                bestaandeKnop.remove();
            }
        }
    }
};


const enkelBerichtVerwijderen = (event) => {
    const button = event.target;
    let span = button.parentNode;
    let div = span.parentNode;
    let box = div.parentNode
    let confirmant = confirm("wil je het echt verwijderen dit mooie bericht?")
    if (confirmant === true) {
        box.removeChild(div);
        arrayVernieuwen()
    }
}
const datumNuOpvragen = () => {
    const d = new Date();
    const dag = String(d.getDate()).padStart(2, '0');
    const maanden = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
    const maand = maanden[d.getMonth()];
    const jaar = String(d.getFullYear()).slice(-2);
    const uren = String(d.getHours()).padStart(2, '0');
    const minuten = String(d.getMinutes()).padStart(2, '0');

    const geformatteerd = `${dag} ${maand} ${jaar} ${uren}:${minuten}`
    return geformatteerd;
}
const arrayVernieuwen = () => {
    global.alleberichten = [];
    let divs = document.querySelectorAll("#chat-box>div");
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];
        let tijd = div.firstChild.textContent;
        let name = div.children[1].textContent;
        let mess = div.lastChild.textContent;

        let bericht =
            {

                naam: name,
                message: mess,
                tijd: tijd

            }
        global.alleberichten.push(bericht);
    }
    localStorage.setItem("opslag", JSON.stringify(global.alleberichten));

}

const beginsituatie = () => {
    if (localStorage.getItem("opslag") == null) return;

    global.alleberichten = JSON.parse(localStorage.getItem("opslag")) || [];

    for (let i = 0; i < global.alleberichten.length; i++) {
        berichtAanmaken(global.alleberichten[i]);
    }

    updateBerichtenVoorGebruiker();
};

const alleswissen = () => {
    global.alleberichten = [];
    localStorage.setItem("opslag", JSON.stringify(global.alleberichten));
    location.reload();
}
const wissel = () => {
    let divs = document.querySelectorAll("#chat-box>div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }

    beginsituatie(); // die roept zelf updateBerichtenVoorGebruiker() op
};


window.addEventListener('load', setup)