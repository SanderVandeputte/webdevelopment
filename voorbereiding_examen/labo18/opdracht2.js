const setup = () => {
    const listItem = document.querySelectorAll("li");

    for (let i = 0; i < listItem.length; i++) {
        listItem[i].style.color = "red";
        listItem[i].className = "listitem";
    }

    const image = document.createElement("img");
    image.setAttribute("src", "test_img.png");
    document.body.appendChild(image);
}




window.addEventListener("load", setup);