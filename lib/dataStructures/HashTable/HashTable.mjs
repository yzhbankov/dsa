// Takes into account collisions
export class HashTable {
    #size = null;

    #list = null;

    constructor(size) {
        // Based on the good balanced hash table rule:
        // good hash table strikes a balance of avoiding collisions while not consuming lots of memory
        // load factor 7 elements / 10 cells
        this.#size = Math.floor(size / 0.7);

        this.#list = [];
    }

    #hash(key) {
        // should be more complex
        let result = 0;
        for (let i = 0; i < key.length; i += 1) {
            result += key.charCodeAt(i) * (i + 1);
        }
        return result % this.#size;
    }

    set(key, value) {
        const hash = this.#hash(key);
        if (!this.#list[hash]) {
            this.#list[hash] = [];
            this.#list[hash].push([key]);
            this.#list[hash].push([value]);
        } else {
            this.#list[hash][0].push(key);
            this.#list[hash][1].push(value);
        }
    }

    get(key) {
        const hash = this.#hash(key);
        if (!this.#list[hash]) return null;
        const collisionKeys = this.#list[hash][0];
        const collisionValues = this.#list[hash][1];
        for (let i = 0; i < collisionKeys.length; i += 1) {
            if (collisionKeys[i] === key) return collisionValues[i];
        }
        return null;
    }
}


const hashTable = new HashTable(10);

hashTable.set('avil', 'bad');
hashTable.set('liva', 'unknown');

console.log(hashTable.get('avil'));
console.log(hashTable.get('liva'));
