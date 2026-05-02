let zoekopdrachten = [];

const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", valideer);

    const opgeslagen = localStorage.getItem("opdrachten");

    if (opgeslagen !== null) {
        zoekopdrachten = JSON.parse(opgeslagen);

        zoekopdrachten.forEach(zoekOpdracht => {
            maakSwatch(zoekOpdracht);
        });
    }
};

const valideer = () => {
    let input = document.getElementById("input").value.trim();

    if (input === "refresh") {
        localStorage.clear();
        location.reload();
        return;
    }

    if (input === "") {
        alert("Je hebt geen input ingegeven");
        return;
    }

    if (input.charAt(0) !== "/") {
        alert("Invalid command");
        return;
    }

    let prefix = input.substring(0, 2);

    if (
        prefix !== "/g" &&
        prefix !== "/y" &&
        prefix !== "/x" &&
        prefix !== "/i"
    ) {
        alert("Unknown prefix command");
        return;
    }

    let query = input.substring(3).trim();

    if (query === "") {
        alert("Je hebt geen zoekopdracht ingegeven");
        return;
    }

    let title = buildTitle(prefix);
    let url = buildUrl(prefix, query);

    let h = {
        title: title,
        text: query,
        url: url,
        prefix: prefix
    };
    zoekopdrachten.push(h);
    localStorage.setItem("opdrachten", JSON.stringify(zoekopdrachten));

    maakSwatch(h);
    NaarLink(h.url);

    document.getElementById("input").value = "";
};

const buildTitle = (prefix) => {
    if (prefix === "/g") return "Google";
    if (prefix === "/y") return "YouTube";
    if (prefix === "/x") return "X";
    if (prefix === "/i") return "Instagram";
};

const buildUrl = (prefix, query) => {
    let encodedQuery = encodeURIComponent(query);

    if (prefix === "/g") {
        return "https://www.google.com/search?q=" + encodedQuery;
    }

    if (prefix === "/y") {
        return "https://www.youtube.com/results?search_query=" + encodedQuery;
    }

    if (prefix === "/x") {
        return "https://x.com/hashtag/" + encodedQuery;
    }

    if (prefix === "/i") {
        return "https://www.instagram.com/explore/search/keyword/?q=%23" + encodedQuery;
    }
};

const NaarLink = (url) => {
    window.open(url, "_blank");
};

const maakSwatch = (h) => {
    const container = document.getElementById("swatches");

    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4";

    const card = document.createElement("div");
    card.className = "card h-100 history-card";
    if (h.prefix === "/g") {
        card.style.backgroundColor = "#4285f4";
    } else if (h.prefix === "/y") {
        card.style.backgroundColor = "#ff0000";
    } else if (h.prefix === "/x") {
        card.style.backgroundColor = "black";
        card.style.color = "white";
    } else{
        card.style.backgroundColor = "#c32aa3";
    }


    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const title = document.createElement("h5");
    title.className = "card-title search-title";
    title.textContent = h.title;

    const text = document.createElement("p");
    text.className = "card-text search-text";
    text.textContent = h.text;

    const btnSwatch = document.createElement("button");
    btnSwatch.className = "btn";
    btnSwatch.textContent = "Go";

    btnSwatch.addEventListener("click", () => {
        NaarLink(h.url);
    });


    if (h.prefix === "/g") {
        btnSwatch.style.backgroundColor = "#ea4335";
        btnSwatch.style.color = "white";
    } else if (h.prefix === "/y") {
        btnSwatch.style.backgroundColor = "#282828";
        btnSwatch.style.color = "white";
    } else if (h.prefix === "/x") {
        btnSwatch.style.backgroundColor = "#f5f8fa";
    } else if (h.prefix === "/i") {
        btnSwatch.style.backgroundColor = "#f46f30";
        btnSwatch.style.color = "white";

    }

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(btnSwatch);

    card.appendChild(cardBody);
    col.appendChild(card);

    container.appendChild(col);
};

window.addEventListener("load", setup);