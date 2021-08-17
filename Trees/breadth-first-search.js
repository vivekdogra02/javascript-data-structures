/**
 * Visiting each node at each level - horizontally
 * 
 * Psuedocode
 * 1. Create a queue (this can be an array) and a variable to store the values of nodes visited.
 * 2. Place the root node in the queue.
 * 3. Loop as long as there is anything in the queue :-)
 *     - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes
 *     - If there is a left property on the node dequeued - add it to the queue.
 *     - If there is a right property on the node dequeued - add it to the queue.
 * 4. Return the variable that stores the values. 
 * 
 * 
 *           10
 *      6        15
 *  3      8         20
 * 
 * BFS - [10,6,15,3,8,20]
 */

function BFS() {
    var node = this.root,
        data = [],
        queue = [];

        queue.push(node);
        while(queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
}