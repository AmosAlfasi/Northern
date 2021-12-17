//import fetch from "node-fetch";
const ol = document.querySelector("#bob");


function createDataElement(data) {
    const el = document.createElement("li");
    el.innerHTML = JSON.stringify(data, null, 2);
    return el;
}

async function getUsers() {
    const ol = document.querySelector("#bob");
    ol.innerHTML = "loading...";
    const res = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    const elements = res.filter(element => element.address.geo.lat > 0)
        .map(element => element.name)
        .map(element => createDataElement(element))
    ol.innerHTML = "";
    elements.forEach(el => ol.appendChild(el));
    // ol.innerHTML += ol.innerHTML;
};

function clearList() {
    const ol = document.querySelector("#bob");
    ol.innerHTML = "";
}



function debug() {
    document.querySelector("ol li:nth-child(4)").className = "danger"
}
