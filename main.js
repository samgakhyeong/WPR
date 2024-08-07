
let gJson = undefined;
let dJson = undefined;

window.addEventListener("DOMContentLoaded", (e) => {

    fetch("./assets/data.json", {
        method: 'GET',
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        },
    })
        .then((response) => response.json())
        .then((json) => {
            gJson = json;
            const params = new URLSearchParams(window.location.search);
            if (params.size > 0) {
                dJson = filterData(gJson, params.get("q"));
            } else {
                dJson = [...gJson];
            }
            renderJSON(dJson);
        });

    document.querySelector("#main #form").addEventListener("submit", (e) => {
        e.preventDefault();
        let query = document.querySelector("#main #form input").value;
        let url = new URL(window.location);

        if (url.searchParams.get('q') !== query) {
            url.searchParams.set('q', query);
            console.log("searchParams: " + query);
            history.pushState({ "query": query }, '', url);

            dJson = filterData(gJson, query);
            renderJSON(dJson);
        }
    });
});

window.addEventListener("popstate", (event) => {
    let query = document.querySelector("#main #form input")
    //first page
    if (event.state === null) {
        query.value = "";
        renderJSON(gJson);
    } else if (event.state) {
        query.value = event.state.query;
        dJson = filterData(gJson, event.state.query);
        renderJSON(dJson);
    }
});

function filterData(data, query) {
    console.log("filterData : " + query + ", DataCount = " + data.length);
    return data.filter((e) => {
        return (e.title.indexOf(query) !== -1)
    });
}

function renderJSON(json) {
    console.log("renderJSON, json.length : " + json.length);
    let content = document.querySelector("#main .content");
    content.replaceChildren();
    json.forEach(e => {
        content.appendChild(createElement(e));
    });
}

function createElement(json) {
    //create root element
    let element = document.createElement("div");
    element.classList.add(...["element", "border", "border-dark", "rounded", "m-3"]);

    element.appendChild(createChildElement("p", "title", json.title));
    element.appendChild(createChildElement("p", "category", json.category));
    element.appendChild(createChildElement("p", "image", json.image));
    element.appendChild(createChildElement("p", "cooking_method", json.cooking_method));
    element.appendChild(createChildElement("p", "price", json.price));

    return element;
}

function createChildElement(tag, className, conetent) {

    //create element
    let elementTitle = document.createElement(tag);
    elementTitle.classList.add(className);
    elementTitle.classList.add(...["m-1", "text-center", "border-bottom", "border-dark"]);
    //create textNode
    let contentTitleNode = document.createTextNode(conetent);
    elementTitle.appendChild(contentTitleNode);

    return elementTitle;
}