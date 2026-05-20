const setup = () =>{
    const button = document.getElementById("verstuur");
    button.addEventListener("click", controleer)
}
const controleer = () =>{
    const input = document.getElementById("input").value;
    const output = document.getElementById("output")
    console.log(input);
    output.textContent = input;

    let result = "";

    for(let i = 0; i < input.length; i++){

        let stuk = input.slice(i, i+3)


        if (stuk.length === 3){
            if (i === 0){
                result += stuk
            } else if (i === input.length-1){
                result += stuk
            }
            else{
                result += " - " + stuk
            }
        }
    }

    console.log(result);
}

window.addEventListener("load", setup);