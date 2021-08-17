/**
 * Binary Search Tree
 * 1. Every parent node has atmost 2 children.
 * 2. Every node to the left of the parent node is always less than the parent.
 * 3. Every node to the right of the parent node is always greater than the parent.
 * 
 * Time complexity
 * Insertion - O(logN)
 * Searching - O(logN)
 */

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
}

/**
 * How to insert a node into the tree ( you can use iterative function or recursive function)
 * 
 * 1. Create a new node.
 * 2. Starting at root
 *   a) Check if there is a root, if not - the root now become the new node and return 
 *   b) If there is a root, check if the value of new node is greater than or less than value of the root.
 *   
 *   - If it is greater
 *     - Check to see if there is a node to the right.
 *       - if there is, move to that node and repeat these steps
 *       - If there is not, add that node to the right property.
 *   - If it is less
 *      - Check to see if there is a node to the left.
 *        - If there is, move to that node and repeat these steps
 *        - If there is not, add that node to the left property.   
 * 
 */

function insert(val) {
    var newNode = new Node(val);

    if (this.root === null) { // If there is no root node, just add it and return
        this.root = newNode;
        return this;
    }
    // Else, root node is present
    var current = this.root;

    while (true) {
        if (this.root === current) return undefined;  // Check for duplicate values
        // Left tree
        if (val < current.val) {
            if (current.left === null) { // current.left node is empty, just add node and return
                current.left = newNode;
                return this;
            }
            // else traverse the left side until exact spot to insert is found
            current = current.left;
        } else {
            if (val > current.value) {
                if (current.right === null) { // current.right node is empty, just adding a node and return
                    current.right = newNode;
                    return this
                }
                // else traverse the right side until exact spot to insert is found
                current = current.right;
            }
        }
    }
}

/**
 * How to Find a node into the tree ( you can use iterative function or recursive function)
 * 
 * 1. Starting at root
 *   a) Check if there is a root, if not - we are done searching and return null
 *   b) If there is a root, check if the value of new node is the value we are looking for.
 *      if we found it, we are done searching
 *   c) If not, check to see if the value is greater than or less than the value of the root
 *   
 *   - If it is greater
 *     - Check to see if there is a node to the right.
 *       - if there is, move to that node and repeat these steps
 *       - If there is not, we are done searching.
 *   - If it is less
 *      - Check to see if there is a node to the left.
 *        - If there is, move to that node and repeat these steps
 *        - If there is not, we are done searching.   
 * 
 */

function find(val) {
    if(this.root === null) return false;
    var current = this.root,
        found = false;
      while(current && !found) {
        if(val < current.value) {
            current = current.left;
        } else if(val> current.value) {
            current = current.right;
        } else {
            found = true;
        }
        if(!found) return false;

        return current;

      }  
}