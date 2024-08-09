window.addEventListener("DOMContentLoaded", (e) => {
    let json = JSON.parse(window.localStorage.getItem("lastClickedItemData"));

    let rootElement = document.querySelector("#main .content");


    {
        //title
        //div[class=row]
        let rowElement = document.createElement("div");
        rowElement.classList.add(...["row"]);
        //h1[class=col]
        let dataElement = document.createElement("h1");
        dataElement.classList.add(...["col", "text-center", "m-2"]);

        dataElement.innerText = json.title;
        rowElement.appendChild(dataElement);
        rootElement.appendChild(rowElement);
    }

    {
        //cooking_method
        //div[class=row]
        let rowElement = document.createElement("div");
        rowElement.classList.add(...["row"]);
        //div[class=col]
        let dataElement = document.createElement("div");
        dataElement.classList.add(...["col", "text-center"]);
        dataElement.innerText = json.cooking_method;
        rowElement.appendChild(dataElement);
        rootElement.appendChild(rowElement);
    }

    {
        //div[class=row]
        let rowElement = document.createElement("div");
        rowElement.classList.add(...["row"]);

        //div[class=col]
        let colElement = document.createElement("div");
        colElement.classList.add(...["col", "text-center", "d-flex", "justify-content-center"]);

        //table
        let elementTable = document.createElement("table");
        elementTable.classList.add(...["table", "table-striped", "border", "border-dark", "m-3"]);
        //thead
        {
            let elementThead = document.createElement("thead");
            let elementTr = document.createElement("tr");

            {
                //th
                let elementTh = document.createElement("th");
                elementTh.appendChild(document.createTextNode("이름"));
                elementTr.appendChild(elementTh);
            }

            {
                //th
                let elementTh = document.createElement("th");
                elementTh.appendChild(document.createTextNode("용량"));
                elementTr.appendChild(elementTh);
            }

            elementThead.appendChild(elementTr);
            elementTable.appendChild(elementThead);
        }

        {
            //tbody
            let elementTbody = document.createElement("tbody");
            elementTable.appendChild(elementTbody);
            json.materials.forEach(e => {
                //tr
                let elementTr = document.createElement("tr");

                {
                    //td
                    let elementTd = document.createElement("td");
                    let key = Object.keys(e)[0];
                    elementTd.innerText = key;
                    elementTr.appendChild(elementTd);
                }

                {
                    //td
                    let elementTd = document.createElement("td");
                    let values = Object.values(e)[0];
                    elementTd.innerText = values;
                    elementTr.appendChild(elementTd);
                }

                elementTbody.appendChild(elementTr);
            });
            colElement.appendChild(elementTable);
            rowElement.appendChild(colElement);
            rootElement.appendChild(rowElement);
        }
    }
    {
        {
            //div[class=row]
            let rowElement = document.createElement("div");
            rowElement.classList.add(...["row"]);
            {
                //div[class=col]
                let colElement = document.createElement("div");
                colElement.classList.add(...["col", "text-center", "m-2"]);
                colElement.appendChild(document.createTextNode(json.price));
                rowElement.appendChild(colElement);
            }
            {
                //div[class=col]
                let colElement = document.createElement("div");
                colElement.classList.add(...["col", "text-center", "m-2"]);
                colElement.appendChild(document.createTextNode(json.like));
                rowElement.appendChild(colElement);
            }
            {
                //div[class=col]
                let colElement = document.createElement("div");
                colElement.classList.add(...["col", "text-center", "m-2"]);
                colElement.appendChild(document.createTextNode(json.category));
                rowElement.appendChild(colElement);
            }
            {
                //div[class=col]
                let colElement = document.createElement("div");
                colElement.classList.add(...["col", "text-center", "m-2"]);
                colElement.appendChild(document.createTextNode(json.image));
                rowElement.appendChild(colElement);
            }
            rootElement.appendChild(rowElement);

        }
    }
});