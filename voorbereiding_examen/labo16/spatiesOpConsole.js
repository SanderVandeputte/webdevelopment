const setup = () =>{
    let buttonSend = document.getElementById('verzenden');
    buttonSend.addEventListener('click', omvormen)
}

const omvormen = () =>{
    let input = document.getElementById('input').value;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== " ")
            result += input[i] + " ";
    }

    console.log(result.trim());
}

window.addEventListener('load', setup)