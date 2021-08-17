/**
 *           10
 *      6        15
 *  3      8         20
 *
 * post order - [3,8,6,20,15,10] 
 * 
 * Psuedocode (Recursive)
 * 1. Create a variable to store the values of nodes visited.
 * 2. Store the root of the BST in a variable called current.
 * 3. Write a helper function which accepts a node
 *      - If the node has a left property, call the helper function with the left property of the node.
 *      - If the node has a right property, call the helper function with the right property of the node.
 *  	- Push the value of the node to the variable that stores the values.
 * 4. Invoke the helper function with the current value.
 * 5. Return the array of values.
 */

function DFSPostOrder() {
 var data = [];
 var current = this.root;

 function traverse(node) {
     if(node.left) traverse(node.left);
     if(node.right) traverse(node.right);
     data.push(node.value);
 }
 traverse(current);
 return data;
}