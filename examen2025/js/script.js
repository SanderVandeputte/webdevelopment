// Globale variabele
let global = {
    huidigeUser: "",
    berichten: [],
    IntervalId: 0
};

const setup = () => {


    const opgeslagen = localStorage.getItem("berichten");
    if (opgeslagen !== null) {
        global.berichten = JSON.parse(opgeslagen);
    }    global.berichten.forEach(bericht => berichtAanmaken(bericht));




    document.getElementById('send-button').addEventListener('click', berichtToevoegen);
    document.getElementById("message-sender").addEventListener("change", updateSameUserStyles);
};

const clear = () =>{
    global.message = [];
    localStorage.clear()
}

const berichtToevoegen = () => {
    let naam = document.getElementById("message-sender").value;
    let message = document.getElementById('message-input').value;

    if (message.trim() !== '') {
        let bericht = {
            naam: naam,
            message: message,
            tijd: datumOpvragen(),
        };

        global.berichten.unshift(bericht);
        berichtAanmaken(bericht);
        updateSameUserStyles();

        localStorage.setIten("berichten", JSON.stringify(bericht));
        console.log(global.berichten);


    }

    console.log(global.berichten);
};

const berichtAanmaken = (bericht) => {
    let div = document.createElement('div');
    div.classList.add('message');

    div.textContent = bericht.message;

    let time = document.createElement('span');
    time.textContent = bericht.tijd;
    time.classList.add('timestamp');
    div.prepend(time);

    let sender = document.createElement('span');
    sender.classList.add('sender');
    sender.textContent = bericht.naam;
    div.append(sender);


    document.getElementById('chat-box').prepend(div);
};



const updateSameUserStyles = () => {
    const huidigeUser = document.getElementById("message-sender").value;

    document.querySelectorAll('.message').forEach(bericht => {
        const sender = bericht.querySelector('.sender').textContent;

        if (sender === huidigeUser) {
            bericht.classList.add('same-user');
        } else {
            bericht.classList.remove('same-user');
        }
    });
};



const datumOpvragen = () => {
    let d = new Date();
    const maanden = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];

    let dag = d.getDate();
    let maand = maanden[d.getMonth()];
    let jaar = String(d.getFullYear()).slice(2);
    let uren = String(d.getHours()).padStart(2, "0");
    let minuten = String(d.getMinutes()).padStart(2, "0");

    return `${dag} ${maand} ${jaar} ${uren}:${minuten}`;
};

window.addEventListener("load", setup);
