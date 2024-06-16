import Graph from "../models/Graph.mjs";

let g = new Graph();

let locationInput = document.getElementById('location');
let addLocationButton = document.getElementById('btn-add1');
let firstLocationInput = document.getElementById('firsLocation');
let secondLocationInput = document.getElementById('secondLocation');
let weightLocationInput = document.getElementById('weightLocation');
let addDistanceButton = document.getElementById('btn-add2');
let locationListDiv = document.getElementById('location-list');
let startDfsButton = document.getElementById('btn-add3');
let initLocationInput = document.getElementById('initLocation');
let dfsListDiv = document.getElementById('dfs-list');

addLocationButton.addEventListener('click', () => {
    let location = locationInput.value.trim();
    if (location) {
        g.addV(location);
        updateLocationList();
        locationInput.value = '';
        alert('Ubicación agregada');
        console.log(location);
    } else {
        alert('Elementos vacíos');
    }
});

addDistanceButton.addEventListener('click', () => {
    let firstLocation = document.getElementById("firsLocation").value;
    let secondLocation = document.getElementById("secondLocation").value;
    let weight = parseInt(document.getElementById("weightLocation").value);


    if (firstLocation, secondLocation != "" && weight >= 0) {
        let success = g.addConexion(firstLocation, secondLocation, weight);
        if (success) {
            updateLocationList();
            console.log(success);
        } else {
            alert('Una o ambas locaciones no existen en el grafo.');
            console.log(success);
        }

        firstLocationInput.value = '';
        secondLocationInput.value = '';
        weightLocationInput.value = '';
    }
});

startDfsButton.addEventListener('click', () => {
    let initLocation = document.getElementById("initLocation").value;
    
   g.dfs(initLocation, imprimir) //Se inicia el recorrido. Puedes cambiar el callback
   g.getVisit().clear() //Limpio el Set() de visitados, para poder generar otra visita
});

let imprimir = (value) => {
    console.log(value);
}

function updateLocationList() {
    locationListDiv.innerHTML = '';
    g.getVertices().forEach((location) => {
        const div = document.createElement('div');
        div.textContent = location;
        locationListDiv.appendChild(div);
    });
}

function performDFS(start) {
    let result = [];
    g.dfs(start, (location) => result.push(location));

    result.forEach(location => {
        const div = document.createElement('div');
        div.textContent = location;
        dfsListDiv.appendChild(div);
    });
}

// Inicializar la lista de locaciones
updateLocationList();
