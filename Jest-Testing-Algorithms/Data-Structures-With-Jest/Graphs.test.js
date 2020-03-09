/* 
THE EFFICENCY OF GRAPH ALGORITHMS ARE LARGELY DEPENDS ON THE DATA STRUCTURE USED TO REPRESENT A GRAPH.
*/
//  TO BE CONTINUED
class Vertex {
  constructor(label) {
    this.label = label;
  }
}

class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      this.adj[i].push("");
    }
    this.addEdge;
    this.toString;
  }

  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  showGraph() {
    for (let i = 0; i < this.vertices; ++i) {
      putstr(i + " -> ");
      for (let j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] !== undefined) putstr(this.adj[i][j] + " ");
      }
      print();
    }
  }

  /* Graphs: Breadth-first search */

  bfs(graph, root) {
    const nodesLen = {};

    for (var i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    const queue = [root];
    let current;

    while (queue.length !== 0) {
      current = queue.shift();

      let curConnected = graph[current];
      let neighborIdx = [];
      let idx = curConnected.indexOf(1);
      while (idx !== -1) {
        neighborIdx.push(idx);
        idx = curConnected.indexOf(1, idx + 1);
      }

      for (let j = 0; j < neighborIdx.length; j++) {
        if (nodesLen[neighborIdx[j]] == Infinity) {
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          queue.push(neighborIdx[j]);
        }
      }
    }
    return nodesLen;
  }

  /*var exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];
  console.log(bfs(exBFSGraph, 1));*/
}

describe.skip("GRAPHS", () => {
  it("test", () => {
    const graph = new Graph();
    console.log(graph);
  });
});
