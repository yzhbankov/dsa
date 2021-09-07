class Node {
    #data = null;

    #nextNode = null;

    constructor(value) {
        this.#data = value;
    }

    get data() {
        return this.#data;
    }

    get nextNode() {
        return this.#nextNode;
    }

    set nextNode(link) {
        this.#nextNode = link;
    }
}

export class LinkedList {
    #firstNode = null;

    constructor(node) {
        this.#firstNode = node;
    }

    read(index) {
        let currentNode = this.#firstNode;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.nextNode;
            currentIndex += 1;

            if(currentNode === null) {
                return null;
            }
        }
        return currentNode.data;
    }

    indexOf(value) {
        let currentNode = this.#firstNode;
        let currentIndex = 0;

        while (currentNode) {
            if(currentNode.data === value) {
                return currentIndex;
            }
            currentNode = currentNode.nextNode;
            currentIndex += 1;
        }
        return null;
    }

    insert(index, value) {
        const node = new Node(value);

        if (index === 0) {
            node.nextNode = this.#firstNode;
            this.#firstNode = node;
            return;
        }

        let currentNode = this.#firstNode;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex += 1;

            if(currentNode === null) {
                return null;
            }
        }

        node.nextNode = currentNode.nextNode;
        currentNode.nextNode = node;
    }

    delete(index) {
        if (index === 0) {
            this.#firstNode = this.#firstNode.nextNode;
            return;
        }

        let currentNode = this.#firstNode;
        let currentIndex = 0;

        while (currentIndex < index - 1) {
            currentNode = currentNode.nextNode;
            currentIndex += 1;

            if(currentNode === null) {
                return null;
            }
        }
        const deletedNode = currentNode.nextNode;
        if (!deletedNode) return;
        currentNode.nextNode = deletedNode.nextNode;
    }
}

const nodeOne = new Node('Once');
const nodeTwo = new Node('upon');
const nodeThree = new Node('a');
const nodeFour = new Node('time');

nodeOne.nextNode = nodeTwo;
nodeTwo.nextNode = nodeThree;
nodeThree.nextNode = nodeFour;

const linkedList = new LinkedList(nodeOne);

console.log(linkedList.read(3));
console.log(linkedList.indexOf('time'));

linkedList.insert(4, 'ups');
console.log(linkedList.read(4));

linkedList.delete(0);
console.log(linkedList.read(0));
