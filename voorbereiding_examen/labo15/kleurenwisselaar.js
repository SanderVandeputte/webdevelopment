const setup = () => {
    const button = document.getElementsByTagName("button");

    for (let i = 0; i < button.length; i++) {
        button[i].style.backgroundColor = "white";
    }

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => {
            const knop = button[i]

            if (knop.style.backgroundColor === "white") {
                knop.style.backgroundColor = "green"
            } else {
                knop.style.backgroundColor = "white"
            }
        });
    }
}

window.addEventListener('load', setup)