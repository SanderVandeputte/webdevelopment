const setup = () => {
    document.getElementById("button").addEventListener("click", print_gesplitst)
}

const print_gesplitst = () => {
    let string = document.getElementById("input").value
    let gesplitst = string.split("").join(" ");
    console.log(gesplitst);
}


window.addEventListener("load", setup)
