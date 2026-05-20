const setup = () =>{
    let gemeenten = [];
    while (true){
        let input = prompt("Geef een gemeente in.")
        if (input === null || input.toLowerCase() === "stop" ||input === ""){
            break;
        } else{
            gemeenten.push(input);
        }
    }
    gemeenten.sort()
    console.log(gemeenten);
    let selection = document.createElement("select")
    document.body.appendChild(selection);
    for (let i = 0; i < gemeenten.length; i++) {
        let option = document.createElement("option");
        option.textContent = gemeenten[i];
        selection.appendChild(option);
    }
}
window.addEventListener('load', setup);