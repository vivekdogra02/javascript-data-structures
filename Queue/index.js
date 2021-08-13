/**
 * 
 * Its a FIFO data structure
 * 
 *  * Time Complexity: 
 * Insertion - O(1)
 * Removal - O(1)
 * Access - O(N)
 * Searching - O(N) 
 * 
 * eg: queue in the bank, plane, rail etc
 *  / Background tasks
 *  / Uploading resources
 *  / Printing/Task processing
 * 
 */

/** *
 * Linked list implementation
 */

 class Node {
    constructor(val) {
        this.value = val;
        this.next= null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
 /** Add to the end */
    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
       
    }
/** Remove from beginning */
    dequeue() {
        if(!this.first) return null;
        var current = this.first;
        if(this.first === this.last) {
            this.last = null; 
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return current.val;
    }
}