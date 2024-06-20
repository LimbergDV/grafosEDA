import { LinkedList } from "./linkedList/LinkedList.mjs";

export default class Graph {
  #listaAdyacencia = [];
  #matrizAdyacencia = []
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

  dijkstra(verticesInit){
    let infinito = 1000000
      let L = []
      let V = []
      let LPrima = []
      let D = []
      let DPrima = []
      let v1;

    for (let i=0; i<this.#matrizAdyacencia.length; i++){
      V[i]=i
      LP[i]= V[i]
      D[i] = infinito
      DPrima[i] = infinito

    }

    v1= this.#map.get(verticesInit)
    D[v1] = 0
    DPrima [v1]=0 

    while(L.length != V.length){
      let minimo = infinito
      let minimoIndex = -1

      for(let i = 0; i<V.length; i++){
        if(LP[i] !== null && DPrima[i]< minimo){
          minimo = DPrima[i]
          minimoIndex = i
        }
      }

      if (minimoIndex === -1){
        break;
      }

      L.push(minimoIndex) = null
      LPrima[minimoIndex] = null
      
      for(let i = 0;i<V.length; i++){
        if(LPrima[i] !== null){
          let alt = DPrima[minimoIndex] + this.#matrizAdyacencia [minimoIndex][i];
          if(alt<DPrima[i]){
            DPrima[i] = alt;
          }
        }
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