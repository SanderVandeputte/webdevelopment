const setup = () => {

    const waarden = [ 34, 0.12, true, new Date(), (message) => console.log(message) ];

    const paragraaf = document.getElementsByTagName("p");

    for (let i = 0; i < waarden.length; i++) {
        paragraaf[i].innerHTML += "<strong>    ==> typeof: " + typeof waarden[i] + "</strong>";
    }
};
window.addEventListener("load", setup);