const setup = () =>{

    let substring = document.getElementById("substringBtn");
    substring.addEventListener("click", substringOmzetten)

}

const substringOmzetten = () =>{
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let output = document.getElementById("output");
    let input = document.getElementById("input").value;

    if (input !== null && input !== ""){

        let outputString = input.substring(start, end);

        output.textContent = outputString;
    } else{
        output.textContent = "geen input gegeven";
    }





}

window.addEventListener("load", setup)