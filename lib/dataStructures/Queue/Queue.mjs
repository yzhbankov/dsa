export class Queue {
    #list = null;

    constructor() {
        this.#list = [];
    }

    enqueue(value) {
        this.#list.push(value);
    }

    dequeue() {
        return this.#list.shift();
    }

    read() {
        return this.#list[0]
    }
}


const queue = new Queue();

queue.enqueue('one');
queue.enqueue('two');

console.log(queue.read());
console.log(queue.dequeue());
console.log(queue.read());
console.log(queue.dequeue());
console.log(queue.read());
