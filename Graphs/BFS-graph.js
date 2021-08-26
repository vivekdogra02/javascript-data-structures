/**
 * Breadth First traversal
 *
 * Pseudo Code Example
 * 1. This function should accept a starting vertex.
 * 2. Create a queue(or an array) and place the starting vertex in it.
 * 3. create an array to store nodes visited.
 * 4. Create a object to stores nodes visited
 * 5. Mark the starting vertex as visited.
 * 6. Loop as long as there is anything in the queue.
 * 7. Remove the first node from the queue and push into the array that stores nodes visited.
 * 8. Loop over each vertex in the adjancenyList for the vertex you are visiting.
 * 9. If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex.
 * 10. Once you have finished looping, return the array of visited nodes.
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

    breadthFirst(start) {
        let queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        
        visited[start] = true;
        
        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjancenyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}