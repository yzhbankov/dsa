export class Stack {
    #list = null;

    constructor() {
        this.#list = [];
    }

    push(value) {
        this.#list.push(value);
    }

    pop() {
        return this.#list.pop();
    }

    read() {
        return this.#list[this.#list.length - 1]
    }
}


const stack = new Stack();

stack.push('one');
stack.push('two');

console.log(stack.read());
console.log(stack.pop());
console.log(stack.read());
console.log(stack.pop());
console.log(stack.read());
