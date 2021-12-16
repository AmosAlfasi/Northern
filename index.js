//import fetch from "node-fetch";
let data = []

var responseText = document.getElementById('response');

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
};



console.log(data);

