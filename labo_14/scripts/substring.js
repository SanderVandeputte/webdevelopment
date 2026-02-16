const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    document.getElementById("bereken").addEventListener("click", bereken);
};

const bereken = () => {
    const input = document.getElementById("input").value;
    const start = document.getElementById("start").value;
    const eind = document.getElementById("eind").value;
    let output = document.getElementById("output");

    if (start === "" || eind === "" || input === "") {
        output.textContent = "start en eind invullen";
        return;
    }

    const berekening = input.substring(start, eind);
    output.textContent = berekening;
};


window.addEventListener("load", setup);
