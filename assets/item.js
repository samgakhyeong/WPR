window.addEventListener("DOMContentLoaded", (e) => {
    let json = JSON.parse(window.localStorage.getItem("lastClickedItemData"));

    let rootElement = document.querySelector("#main .content");

    let row1Element = document.createElement("div");
    row1Element.classList.add(...["row"]);

    {
        let dataElement = document.createElement("div");
        dataElement.classList.add(...["col", "text-center"]);
        dataElement.innerText = json.title;

        row1Element.appendChild(dataElement);
    }

    let row2Element = document.createElement("div");
    row1Element.classList.add(...["row"]);

    {
        let dataElement = document.createElement("div");
        dataElement.classList.add(...["col", "text-center"]);
        dataElement.innerText = json.cooking_method;
        row2Element.appendChild(dataElement);
    }

    let row3Element = document.createElement("div");
    row3Element.classList.add(...["row"]);

    {
        let colElement = document.createElement("div");
        colElement.classList.add(...["col", "text-center", "d-flex", "justify-content-center"]);

        let elementTable = document.createElement("table");
        elementTable.classList.add(...["table", "table-striped", "border", "border-dark"]);
        {
            let elementThead = document.createElement("thead");
            let elementTr = document.createElement("tr");

            {
                let elementTh = document.createElement("th");
                elementTh.appendChild(document.createTextNode("이름"));
                elementTr.appendChild(elementTh);
            }

            {
                let elementTh = document.createElement("th");
                elementTh.appendChild(document.createTextNode("용량"));
                elementTr.appendChild(elementTh);
            }

            elementThead.appendChild(elementTr);
            elementTable.appendChild(elementThead);
        }

        {
            let elementTbody = document.createElement("tbody");
            elementTable.appendChild(elementTbody);
            json.materials.forEach(e => {
                let elementTr = document.createElement("tr");

                {
                    let elementTd = document.createElement("td");
                    let key = Object.keys(e)[0];
                    elementTd.innerText = key;
                    elementTr.appendChild(elementTd);
                }

                {
                    let elementTd = document.createElement("td");
                    let values = Object.values(e)[0];
                    elementTd.innerText = values;
                    elementTr.appendChild(elementTd);
                }

                elementTbody.appendChild(elementTr);
            });
        }
        colElement.appendChild(elementTable);
        row3Element.appendChild(colElement);
    }

    rootElement.appendChild(row1Element);
    rootElement.appendChild(row2Element);
    rootElement.appendChild(row3Element);
});