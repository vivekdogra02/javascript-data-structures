/**
 * A data structure that stores the key/value pairs
 * They are like array, but not in order
 * It is fast and efficient 
 * 
 * Python has dictionaries
 * Javascript has objects and Maps
 * Java, Go, Scala has Maps
 * Ruby has hashes
 * 
 * Time complexity is 
 * Insert  - O(1)
 * Deletion  - O(1)
 * Access  - O(1)
 */

class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let idx = this._hash(key);
        if(this.keyMap[idx]) {
            for(let i = 0; i < this.keyMap[idx].length; i++) {
                if(this.keyMap[idx][0] === key) {
                    return this.keyMap[idx][i];
                }
            }
        }
        return undefined;
    }

    values() {
        let valuesArr = []; //
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j<this.keyMap[i].length; j++) {
                    if(!valuesArr[i].includes(this.keyMap[i][j][1])) { // to avoid duplicate keys
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    values() {
        let keysArr = []; //
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j<this.keyMap[i].length; j++) {
                    if(!keysArr[i].includes(this.keyMap[i][j][0])) { // to avoid duplicate values
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}