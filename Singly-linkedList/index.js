/**
 * 
 * Linked list - its a bunch of nodes pointing to other nodes
 * Difference btw array and linked list is that linked list does not have indexes and array have indexes
 * Random access is not allowed in linked list unlike the array.
 * Insertion & deletion is expensive in arrays unlike the linked list.
 * 
 * Singly linked list - in this one node points to the next one and
 * there must be head and tail and length
 * one directionally connection btw one node to another node
 */

/**
 * Time complexity  
 * Insert - O(1)
 * Removal - depends O(1) or O(N)
 * Searching - O(N)
 * Access - O(N)
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    /** Add a node */
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next =  newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /** Removing the node from tail */
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail= current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(length == 0) {
            // Reset 
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    /** Removing from the beginning of the head */
    shift() {
        if(!this.head) return undefined;
        var current = this.head
        this.head = current.next;
        this.length--;
        if(this.length == 0) {
            this.tail = null;
        }
        return current;
    }

    /** Adding in the beginning of the head */

    unShift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    /** Retreving a node by its position in the linked list */

    get(index) {
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    /** Setting a new value at a particular index in the linked list which is already in the list */
    set(index, val) {
        var foundNode = get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /**
     * Insert a new node at a particular index in the linked list
     */

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unShift(val);

        var prev = this.get(index - 1);
        var forw = prev.next;
        var newNode = new Node(val);
        prev.next = newNode
        newNode.next = forw;
        this.length++;
        return true;
    }

    /** Remove a node at a particular index in the linked list */

    remove(index) {
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length -1 ) return this.pop();
        if(index === 0 ) return this.shift();

        var prev = this.get(index -1);
        var removed= prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    /** Reverse a single linked list */

    reverse() {
        var current = this.head;
        this.head = this.tail;
        this.tail = current;

        var prev = null;
        var next = null;

        for (let i = 0; i < this.length; i++) {
            
            next = current.next;
            node.next = prev;
            
            prev = current;
            current = next;
        }
        return this;
    }
}