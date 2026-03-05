const setup = () => {
    document.getElementById("button").addEventListener("click", print_gesplitst)
}

const maakMetSpaties = (inputText) => {
    return inputText.split("").join(" ");
}

const print_gesplitst = () => {
    let string = document.getElementById("input").value;
    let gesplitst = maakMetSpaties(string);
    document.getElementById("output").textContent = gesplitst;
    console.log(gesplitst);
}


window.addEventListener("load", setup)