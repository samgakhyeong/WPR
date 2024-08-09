window.addEventListener("DOMContentLoaded", (e) => {
    let json = JSON.parse(window.localStorage.getItem("lastClickedItemData"));

    let rootElement = document.querySelector("#main .content");

    let row1Element = createDivElement(["row"]);
    let data1Element = createConetntDivElement(["col", "text-center"], json.title);
    row1Element.appendChild(data1Element);

    let row2Element = createDivElement(["row"]);
    let data2Element = createConetntDivElement(["col", "text-center"], json.cooking_method);
    row2Element.appendChild(data2Element);

    let row3Element = createDivElement(["row"]);
    let col3Element = createDivElement(["col", "text-center", "d-flex", "justify-content-center"]);
    let elementTable = document.createElement("table");
    elementTable.classList.add(...["table", "table-striped", "border", "border-dark"]);
    {
        let elementThead = document.createElement("thead");
        let elementTr = document.createElement("tr");
        let elementTh1 = document.createElement("th");
        let elementTh2 = document.createElement("th");
        elementTh1.appendChild(document.createTextNode("이름"));
        elementTh2.appendChild(document.createTextNode("용량"));

        elementTr.appendChild(elementTh1);
        elementTr.appendChild(elementTh2);
        elementThead.appendChild(elementTr);
        elementTable.appendChild(elementThead);
    }

    {
        let elementTbody = document.createElement("tbody");
        elementTable.appendChild(elementTbody);
        json.materials.forEach(e => {
            let elementTr = document.createElement("tr");
            let elementTd1 = document.createElement("td");
            let elementTd2 = document.createElement("td");
            let key = Object.keys(e)[0];
            let values = Object.values(e)[0];
            elementTd1.innerText = key;
            elementTd2.innerText = values;

            elementTr.appendChild(elementTd1);
            elementTr.appendChild(elementTd2);

            elementTbody.appendChild(elementTr);
        });
    }
    col3Element.appendChild(elementTable);
    row3Element.appendChild(col3Element);

    rootElement.appendChild(row1Element);
    rootElement.appendChild(row2Element);
    rootElement.appendChild(row3Element);
});

function createDivElement(clsssName) {
    let element = document.createElement("div");
    element.classList.add(...clsssName);
    return element
}

function createConetntDivElement(clsssName, content) {
    let element = document.createElement("div");
    element.classList.add(...clsssName);
    element.innerText = content;
    return element
}