const setup =() => {
	let btnVerhoog=document.getElementById("btnVerhoog");
	btnVerhoog.addEventListener("click", verhoog);
}

const verhoog =() => {
	let txtResult=document.getElementById("txtResult");
	let clickCount=0;
	if(typeof(Storage)=="undefined") {
	  txtResult.innerHTML="Sorry, uw browser ondersteunt geen web storage...";
	} else {
		clickCount=localStorage.getItem("demo.clickCount");
		if (clickCount) {
			clickCount=parseInt(clickCount)+1;
		} else {
			clickCount=1;
			
		}
		localStorage.setItem("demo.clickCount", clickCount.toString());
		txtResult.innerHTML="De waarde van de teller is " + clickCount;
	}
}
window.addEventListener("load", setup);








/*
const setup = () => {
    let btnVerhoog = document.getElementById("btnVerhoog");
    btnVerhoog.addEventListener("click", verhoog);

    // teller aanmaken als hij nog niet bestaat
    if (localStorage.getItem("demo.clickCount") === null) {
        localStorage.setItem("demo.clickCount", "0");
    }

    // huidige waarde tonen
    document.getElementById("txtResult").innerHTML =
        "De waarde van de teller is " + localStorage.getItem("demo.clickCount");
};


const verhoog = () => {
    let txtResult = document.getElementById("txtResult");

    let clickCount = parseInt(localStorage.getItem("demo.clickCount"));
    clickCount++;

    localStorage.setItem("demo.clickCount", clickCount.toString());

    txtResult.innerHTML = "De waarde van de teller is " + clickCount;
};

window.addEventListener("load", setup);
*/
