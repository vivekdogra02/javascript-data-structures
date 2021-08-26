/**
 * A data structure consists of finite and possibly mutable set of vertices or nodes or points, together with 
 * a set of unordered pair of these vertices for an undirected graph or set of ordered pairs for a directed graph.
 */

/**
Using the adjanceny list
1. Add a vertex 
2. Add an Edge.
3. Remove an Edge.
4. Remove a vertex.


Uses of Graph traversal
1. Peer to peer network.
2. Web crawlers.
3. Finding closet matches/recommendations.
4. Shortest path problems
    a) GPS Navigation
    b) Solving mazes
    c) AI(Shortest path to win the game)
 */

class Graph {
    constructor() {
        this.adjancenyList = {};
    }

    addVertex(vertex) {
        if (!this.adjancenyList[vertex]) {
            this.adjancenyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.adjancenyList[v1].push(v2);
        this.adjancenyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjancenyList[v1] = this.adjancenyList[v1].filter(v => v !== v2);
        this.adjancenyList[v2] = this.adjancenyList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex) {
        while (this.adjancenyList[vertex].length) {
            const adjancenyVertex = this.adjancenyList[vertex].pop();
            this.removeEdge(vertex, adjancenyVertex);
        }
        delete this.adjancenyList[vertex];
    }
}