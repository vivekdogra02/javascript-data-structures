/**
 * Depth first search graph
 * we deepen the traversal until widen in.
 *
 * pseudo code
 *  Recursive function
 * DFS(vertex)
 * `1 . if(vertex is empty) return null;
 * 2. add vertex to result list.
 * 3. mark vertex as visited.
 * 4. for each neighbor in vertex's neighbor
 *     5. if neighbor is not visited,
 *              recursively call DFS on neighbor.
 * 
 * Recusive solution:
 * 
 * 1. The function should accept a starting node.
 * 2. Create a list to store the end result, to be returned at very end.
 * 3. Create an object of visited vertices.
 * 4. Create a helper function which accepts a vertex
 *    1. The helper function should return early if the vertex is empty.
 *    2. The helper function should place the vertex it accepts into the visited object and
 *       push that vertex into the result array.
 *    3. Loop over all of the values in the adjancenyList for that vertex.
 *    4. If any of those values have not been visited, recursivly invoke the 
 *       helper function with that vertex.
 * 5. Invoke the helper function with the starting vertex.
 * 6. Return the result array.
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

    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjancenyList = this.adjancenyList;

        function dfs(vertex) {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjancenyList.forEach(neighbors => {
                if(!visited[neighbors]) return dfs(neighbors);
            });
        }
        dfs(start);
        return result;
    }

    /**
     * Iterative solution
     *  Psuedocode
     *  1. The function should accept a starting node.
     * 2. Create a stack to help use keep track of vertices.(list/array)
     * 3. Create a list to store the end result, returned at the very end.
     * 4. Create an object to store the visited vertices.
     * 5. Add the starting vertex to the stack and mark it as visited.
     * 6. While the stack has something in it.
     *      1. Pop the next vertex from the stack.
     *      2. If that vertex is not visited yet.
     *             - Mark as visited.
     *             - Add it to result list.
     *             - Push all of its neighbors into the stack
     * 7. Return the result array. 
     */

    dfsIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjancenyList[currentVertex].forEach(neighbors => {
                if(!visited[neighbors]) {
                    visited[neighbors] = true;
                    stack.push(neighbors);
                }
            })
        }
        return result;
   }
}