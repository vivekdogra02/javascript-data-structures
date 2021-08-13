/**
 * LIFO struture
 * Last in first out 
 * 
 * Time Complexity: 
 * Insertion - O(1)
 * Removal - O(1)
 * Access - O(N)
 * Searching - O(N) 
 * 
 * 
 * use case 
 * 1. Invocation of functional function
 * 2. History of browser stack (routing)
 * 3. Undo / Redo (word etc everywhere)
 */
/** Linked list implementation */

class Node {
    constructor(val) {
        this.value = val;
        this.next= null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(this.size === 0) {
            this.first = newNode; 
            this.last = newNode;
            
        } else {
            var current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        return ++this.size;
    }

    pop() {

        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last)  {
            this.last = null; 
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}