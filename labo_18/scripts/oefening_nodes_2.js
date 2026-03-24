const setup = () => {
    const listItem = document.querySelectorAll('li');
    listItem.forEach(item => {
        item.setAttribute("class", "listitem");
    })

    const style = document.createElement("style")
    style.innerText = ".listitem {color: red;}";
    document.head.appendChild(style);

    const image = document.createElement("img");
    image.setAttribute("src", "../images/image_nodes_2.png");
    image.setAttribute("alt", "een afbeelding");
    document.body.appendChild(image);
}

window.addEventListener('load', setup)
