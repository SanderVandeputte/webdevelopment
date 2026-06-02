const setup = () => {
    document.querySelector("button").addEventListener("click", toevoegenP);

}

const toevoegenP = () => {
    const p = document.createElement("p");
    const div = document.getElementById("myDIV")
    p.textContent = "Toegevoegde paragraaf";
    div.appendChild(p);
}

window.addEventListener('load', setup)
