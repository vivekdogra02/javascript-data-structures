/**
 * A data structure where each element has a priority.
 * Elements with higher priority are served before elements with lower priority
 * 
 * It is quite similar to binary heap structures ( Min heap) - lower means high priority
 * 
 * Psuedo code
 * 1. Write a min Binary heap - lower number means higher priority
 * 2. Each node has a val and a priority . use priority to build the heap
 * 3. Enqueue - accepts a value and priority, makes a new node and puts it in the right spot based off of its priority.
 * 4. Dequeue - removes root element, return it, and re arrange the heap using priority.
 */

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp() {
        const idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentElem = this.values[parentIdx];

            if (element.priority >= parentElem.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parentElem;
            idx = parentIdx;
        }
        return this.values;
    }

    
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const ele = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swap = null;
            let leftChild, rightChild;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < ele.priority) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < ele.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = ele;
            idx = swap;
        }

    }
}