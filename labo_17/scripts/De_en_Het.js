const setup = () => {
    const zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let resultaat = "";

    for (let i = 0; i < zin.length; i++) {
        if (zin.substring(i, i + 2) === "de" && (i === 0 || zin[i-1] === " ") && (i + 2 === zin.length || zin[i+2] === " ")) {
            resultaat += "het";
            i++;
        } else {
            resultaat += zin[i];
        }
    }

    console.log(resultaat);
};

window.addEventListener("load", setup);