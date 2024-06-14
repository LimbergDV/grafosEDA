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
    let firstLocation = firstLocationInput.value.trim();
    let secondLocation = secondLocationInput.value.trim();
    let weight = parseFloat(weightLocationInput.value.trim());

    if (firstLocation && secondLocation && !isNaN(weight)) {
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
    let initLocation = initLocationInput.value.trim();
    if (initLocation) {
        performDFS(initLocation);
    }
});

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
