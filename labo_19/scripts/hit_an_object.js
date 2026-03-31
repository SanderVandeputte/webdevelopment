let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "../images/hit_an_object/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 1000, // duurt 1 seconde totdat volgende afbeelding
    score: 0, // aantal punten
    timeoutId: 0 // id van de timeout timer, zodat we kunnen annuleren
}

let timerId=0;

const setup = () =>{
    let image = document.getElementById('target');
    image.addEventListener('click', geklikt);
    image.style.display = "none";
    document.getElementById("btnStart").addEventListener("click", startGame);

    timerId=setInterval(consoleMelding, global.MOVE_DELAY);

}

const startGame = () => {
    // score resetten
    global.score = 0;
    document.getElementById("score").innerText = global.score;

    // sprite tonen
    let image = document.getElementById("target");
    image.style.display = "block";

    // timers starten
    timerId = setInterval(consoleMelding, global.MOVE_DELAY);
    moveImage();
};

const consoleMelding = () => {
    console.log("1 seconde gepasseerd")
}

const moveImage = () => {

    let image=document.getElementById("target");
    let playfield=document.getElementById("playfield");
    let maxLeft=playfield.clientWidth - image.offsetWidth;
    let maxHeight=playfield.clientHeight - image.offsetHeight;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);

    image.style.left=left+"px";
    image.style.top=top+"px";

    let randomImage = Math.floor(Math.random() * global.IMAGE_COUNT);
    image.src = global.IMAGE_PATH_PREFIX + randomImage + global.IMAGE_PATH_SUFFIX;

    global.timeoutId = setTimeout(moveImage, global.MOVE_DELAY);
}

const geklikt = () => {
    let image = document.getElementById("target");

    if (image.src.includes("0.png")) {      // controleren als bom
        alert("GAME OVER");

        clearTimeout(global.timeoutId);
        clearInterval(timerId);

        image.style.display = "none";
        return;
    }
    global.score++;
    document.getElementById("score").innerText = global.score;
    clearTimeout(global.timeoutId);
    moveImage();

};
window.addEventListener("load", setup);