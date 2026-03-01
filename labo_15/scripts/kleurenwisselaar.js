const setup = () => {
    const knoppen = document.getElementsByTagName("button");

    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].style.backgroundColor = "white";
    }

    for (let i = 0; i < knoppen.length; i++) {
        knoppen[i].addEventListener("click", () => {
            const knop = knoppen[i];

            if (knop.style.backgroundColor === "white") {
                knop.style.backgroundColor = "blue";
            } else {
                knop.style.backgroundColor = "white";
            }
        });
    }
};

window.addEventListener("load", setup);