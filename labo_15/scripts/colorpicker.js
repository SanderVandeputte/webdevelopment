const setup = () => {
    const roodSlider = document.getElementsByClassName("rood_slider")[0];
    const groenSlider = document.getElementsByClassName("groen_slider")[0];
    const blauwSlider = document.getElementsByClassName("blauw_slider")[0];

    const roodValue = document.getElementById("rood_value");
    const groenValue = document.getElementById("groen_value");
    const blauwValue = document.getElementById("blauw_value");

    const colorBox = document.getElementById("color-box");

    const updateColor = () => {
        const r = roodSlider.value;
        const g = groenSlider.value;
        const b = blauwSlider.value;

        roodValue.textContent = r;
        groenValue.textContent = g;
        blauwValue.textContent = b;

        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };

    roodSlider.addEventListener("input", updateColor);
    groenSlider.addEventListener("input", updateColor);
    blauwSlider.addEventListener("input", updateColor);

    updateColor();
};

window.addEventListener("load", setup);