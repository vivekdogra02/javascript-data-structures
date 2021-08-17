/**
 *           10
 *      6        15
 *  3      8         20
 *
 * Pre order - [10,6,3,8,15,20] 
 * 
 * Psuedocode (Recursive)
 * 1. Create a variable to store the values of nodes visited.
 * 2. Store the root of the BST in a variable called current.
 * 3. Write a helper function which accepts a node and returns
 *  	- Push the value of the node to the variable that stores the values.
 *      - If the node has a left property, call the helper function with the left property of the node.
 *      - If the node has a right property, call the helper function with the right property of the node.
 * 4. Invoke the helper function with the current value.
 * 5. Return the array of values.
 */

function DFSPreOrder() {
 var data = [];
 var current = this.root;

 function traverse(node) {
     data.push(node.value);
     if(node.left) traverse(node.left);
     if(node.right) traverse(node.right);
 }
 traverse(current);
 return data;
}