class Node {
    #children = [];
    #name = null;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    add(node) {
        this.#children.push(node);
    }

    remove(node) {
        this.#children = this.#children.filter(_node => _node !== node);
    }

    readAll() {
        this.#children.forEach(child => {
            console.log(child.name);
        })
    }
}


const root = new Node('root');
const left = new Node('left');
const right = new Node('right');
const leftRight = new Node('leftRight');
const rightRight = new Node('rightRight');

root.add(left);
root.add(right);
left.add(leftRight);
right.add(rightRight);

root.readAll();
left.readAll();
right.readAll();
