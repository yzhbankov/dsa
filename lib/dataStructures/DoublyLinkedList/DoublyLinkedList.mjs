class Node {
    #data = null;

    #nextNode = null;

    #prevNode = null;

    constructor(value) {
        this.#data = value;
    }

    set prevNode(node) {
        this.#prevNode = node;
    }

    get prevNode() {
        return this.#prevNode;
    }

    set nextNode(node) {
        this.#nextNode = node;
    }

    get nextNode() {
        return this.#nextNode;
    }

    get data() {
        return this.#data;
    }
}

export class DoublyLinkedList {
    #firstNode = null;

    #lastNode = null;

    constructor(firstNode = null, lastNode = null) {
        this.#firstNode = firstNode;
        this.#lastNode = lastNode;
    }

    insertAtEnd(value) {
        const newNode = new Node(value);

        if (!this.#firstNode) {
            this.#firstNode = newNode;
            this.#lastNode = newNode;
        } else {
            newNode.prevNode = this.#lastNode;
            this.#lastNode.nextNode = newNode;
            this.#lastNode = newNode;
        }
    }

    removeFromFront() {
        if (!this.#firstNode) return null;

        const removedNode = this.#firstNode;
        this.#firstNode = removedNode.nextNode
        return removedNode;
    }

    print() {
        if (!this.#firstNode) return null;
        let currentNode = this.#firstNode;
        while(currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    printReverse() {
        if (!this.#firstNode) return null;
        let currentNode = this.#lastNode;
        while(currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.prevNode;
        }
        return null;
    }
}

const linkedList = new DoublyLinkedList();
linkedList.insertAtEnd('first');
linkedList.insertAtEnd('second');
linkedList.insertAtEnd('third');

linkedList.print();
linkedList.printReverse();


