import { LinkedList } from "./linkedList/LinkedList.mjs";

export default class Graph {
  #listaAdyacencia = [];
  #map = new Map();
  #visit = new Set();
  #count = 0;
  
  constructor() {}

  addV(value) {
    this.#listaAdyacencia.push(new LinkedList());
    this.#map.set(value, this.#listaAdyacencia.length - 1);
    this.#count++;
    return true;
  }

  addConexion(start, end, distance = 1) {
    if (this.#map.has(start) && this.#map.has(end)) {
      this.#listaAdyacencia[this.#map.get(start)].push(end, distance);
      this.#listaAdyacencia[this.#map.get(end)].push(start, distance); 
      return true;
    }
    return false;
  }

  dfs(start, callback) {
    this.#visit.add(start);
    callback(start);

    let list = this.#listaAdyacencia[this.#map.get(start)]; //lista adyacente al nodo
    
    for (let i = 0; i < list.size(); i++) {
      let v = list.getElementAt(i);
      if (!this.#visit.has(v)) {
        this.#visit.add(v);
        this.dfs(v, callback);
      }
    }
  }

  getVertices() {
    return Array.from(this.#map.keys());
  }

  getVisit() {
    return this.#visit;
  }
  
  size() {
    return this.#count;
  }
}