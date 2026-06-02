const setup = () => {
    let texts=document.querySelectorAll(".text");
    for (let i=0;i<texts.length;i++) {
        texts[i].addEventListener("click", klik);
    }
}


const klik = (event) => {
    const txt = event.target;
    if (txt.style.color === "red"){
        event.target.style.color="black";
    } else{
        event.target.style.color = "red";
    }
};

window.addEventListener("load", setup);