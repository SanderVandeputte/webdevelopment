const setup = () => {
    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');

    const redValue = document.getElementById('spanRed');
    const greenValue = document.getElementById('spanGreen');
    const blueValue = document.getElementById('spanBlue');

    const colorBox = document.getElementById("color-box");


    const updateColor = () => {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        console.log("rgb(" + red + "," + green + "," + blue + ")")

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    }

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);


    updateColor()

}

window.addEventListener('load', setup);