const setup = () => {

 document.getElementById("alert").addEventListener("click", alertFunction)
 document.getElementById("confirm").addEventListener("click", confirmFunction)
 document.getElementById("prompt").addEventListener("click", promptFunction)

}

const alertFunction = () =>{
    let awnser = window.alert("Dit is een alert");
    console.log("Dit is de alert: " + awnser);
}

const confirmFunction = () =>{
    let awnser = window.confirm("Dit is een alert");
    console.log("Dit is de alert: " + awnser);
}

const promptFunction = () =>{
    let awnser = window.prompt("Dit is een alert");
    console.log("Dit is de alert: " + awnser);
}
window.addEventListener("load", setup);
