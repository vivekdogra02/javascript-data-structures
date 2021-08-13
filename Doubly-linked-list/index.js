/**
 * 
 * It is a kind of linked list which have previous and next node in this.
 * more memory = more flexibility
 * 
 * Time complexity 
 *
 * Insertion = O(1)
 * Removal = O(1)
 * Searching - O(N)
 * Access = O(N)
 * 
 */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /** Adding a new node */

    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    /** POP a new node from end */
    pop() {
        if (this.length === 0) return undefined;
        var current = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.next;
            this.tail = null;
            current.prev = null;
        }
        this.length--;
        return current;
    }

    /** Remove a node from the beginning of the list. */
    shift() {
        if (!this.head) return undefined;
        var current = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next;
            this.head.prev = null;
            current.next = null;
        }
        this.length--;
        return current;
    }

    /** adding a new val in the beginning of the list*/
    unShift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /** Retreving a node by its position in the linked list */
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        var count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    /** Setting a new value at a particular index in the linked list which is already in the list */
    set(index, val) {
        var foundNode = get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    /**
    * Insert a new node at a particular index in the linked list
    */

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unShift(val);

        var beforeNode = this.get(index - 1);
        var afterNode = prev.next;

        beforeNode.next = newNode;
        newnode.prev = beforeNode;
        newnode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    /** Remove a node at a particular index in the linked list */

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        var removedNode = this.get(index);

        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        // removedNode.prev.next = removed.next;
        // removedNode.next.prev = removed.prev;

        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removed;
    }


    reverse(){
        var current = this.head;
        this.head = this.tail;
        this.tail = current;

        var beforeNode = null;
        var afterNode = null;
     

        for (let i = 0; i < this.length; i++) {
            
            afterNode = current.next;
            current.next = beforeNode;
            
            beforeNode = current;
            current = afterNode;
        }
        return this;
    }
}