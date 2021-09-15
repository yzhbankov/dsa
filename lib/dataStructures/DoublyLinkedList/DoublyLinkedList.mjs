class Node {
    /**
     * @class Node - the list node
     * */

    /**
    * @type {number|null} - data that is stored inside the list
    * */
    #data = null;

    /**
     * @type {Node} - lint to the next node
     * */
    #nextNode = null;

    /**
     * @type {Node} - lint to the prev node
     * */
    #prevNode = null;

    constructor(value) {
        this.#data = value;
    }

    /**
     * @method Set link to the prev node
     * @param {Node} node - node link
     */
    set prevNode(node) {
        this.#prevNode = node;
    }

    /**
     * @method Get link to the prev node
     * @return {Node|null}
     */
    get prevNode() {
        return this.#prevNode;
    }

    /**
     * @method Set link to the next node
     * @param {Node} node - node link
     */
    set nextNode(node) {
        this.#nextNode = node;
    }

    /**
     * @method Get link to the next node
     * @return {Node|null}
     */
    get nextNode() {
        return this.#nextNode;
    }

    /**
     * @method Get node data
     * @return {number}
     */
    get data() {
        return this.#data;
    }
}

export class DoublyLinkedList {
    /**
     * @class {DoublyLinkedList}
     */

    /**
     * @type {Node}
     */
    #firstNode = null;

    /**
     * @type {Node}
     */
    #lastNode = null;

    constructor(firstNode = null, lastNode = null) {
        this.#firstNode = firstNode;
        this.#lastNode = lastNode;
    }

    /**
     * @method inserts value to the end of the list
     * @param {number} value
     */
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

    /**
     * @method removes first element in the list
     * @return {Node|null}
     */
    removeFromFront() {
        if (!this.#firstNode) return null;

        const removedNode = this.#firstNode;
        this.#firstNode = removedNode.nextNode
        return removedNode;
    }

    /**
     * @method prints all the elements values in direct order
     * @return {null}
     */
    print() {
        if (!this.#firstNode) return null;
        let currentNode = this.#firstNode;
        while(currentNode) {
            console.log(currentNode.data)
            currentNode = currentNode.nextNode;
        }
        return null;
    }

    /**
     * @method prints all the elements values in reverse order
     * @return {null}
     */
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
