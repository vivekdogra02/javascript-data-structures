/**
 * Find the shortest path between two paths
 */

class WeightedGraph {

    constructor() {
        this.adjancenyList = {};
    }
    addVertex(v) {
        if(!this.adjancenyList[v]) return this.adjancenyList[v] = [];
    }

    addEdge(v1, v2, weight) {
        this.adjancenyList[v1].push({node: v2, weight});
        this.adjancenyList[v2].push(({node: v1, weight}));
    }
   DijkstraAlgo(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [];

        // build up initial state
        for(let vertex of this.adjancenyList) {
            if(vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length) {
            let smallest = nodes.dequeue().values;
            if(smallest === finish) {
                // WE are done, Build up path to return at the end;
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;

                if(smallest || distances[smallest] !== Infinity) {
                
                    for(let neighbor in this.adjancenyList[smallest]) {
                        // Find neighboring node
                        let nextNode = this.adjancenyList[smallest][neighbor];
                        // Calculate new distance to neighboring node
                        let candidate = distances[smallest] + nextNode.weight;
                        let nextNeighbor = nextNode.node;

                        if(candidate < distances[nextNeighbor]) {
                            // upating new smallest distance to neighbor
                            distances[nextNeighbor] = candidate;

                            // Updating previous - how we got to neighbor
                            previous[nextNeighbor] = smallest;

                            // enqueue in priority
                            nodes.enqueue(nextNeighbor, candidate);
                        }

                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val,priority) {
        this.values.push(val, priority);
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}