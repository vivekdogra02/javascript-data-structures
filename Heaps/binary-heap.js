/**
 * Very similar to binary search tree, but with some different rules!
 * 
 * In maxBinaryHeap - Parent nodes are always larger than child nodes, and
 * In minBinaryHeap - Parent nodes are always smaller than child nodes
 * 
 * There is no order in the child nodes
 * 
 * Time complexity
 *  Inserting - O(log N) times
 *  Removal - O(log N) times
 *  Search - O(N) times
 * 
 */

/**
 * Max binary heap
 * Pseudo code
 * 1. Each parent has at most two child nodes,
 * 2. The value of each parent node is always greater than its child nodes.
 * 3. In a max binary heap, the parent is greater than the children, but there is no guarantee btw sibling nodes
 * 4. A binary heap is as compact as possible, all the children of each node are as full as they can be
 *    and left children are filled out first
 * 
 * Maths 
 *  - For any index of an array n... 
 *  - Left child is stored at 2n + 1 and right child is stored at 2n + 2
 *  - parent is at index (n-1) / 2
 */

/**
 * To insert a node in max binary heap
 *  1. Add to the end of the list
 *  2. bubble up
 * 
 * Pseudo code for
 * 1. Push the value into values property of the heap
 * 2. Bubble up
 *   - create a variable called index  which is the length of the values property -1 
 *   - create a variable called parentIndex which is the floor of (index-1)/2
 *   - Keep looping until the values element at the parent index  is less than the values element at child index
 *      - Swap the value of the values element at the parent index with the value of the element property at child index.
 *      - Set the index to be the parent index and start over 
 */

class MaxHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]; // add any dummy value at first 
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        const idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentElem = this.values[parentIdx];

            if (element <= parentElem) break;
            this.values[parentIdx] = element;
            this.values[idx] = parentElem;
            idx = parentIdx;
        }
        return this.values;
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
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
                if (leftChild > ele) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild > ele) ||
                    (swap !== null && rightChild > leftChild)) {
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