class TreeNode {
    #value = null;

    #leftChild = null;

    #rightChild = null;

    constructor(value, leftChild = null, rightChild = null) {
        this.#value = value;
        this.#leftChild = leftChild;
        this.#rightChild = rightChild;
    }

    get value() { return this.#value; }

    get leftChild() { return this.#leftChild; }

    get rightChild() { return this.#rightChild; }

    set leftChild(node) { this.#leftChild = node; }

    set rightChild(node) { this.#rightChild = node; }
}

export class BinaryTree {
    #root = null;

    constructor(value) {
        this.#root = new TreeNode(value);
    }

    search(value, node = this.#root) {
        if (!node || node.value === value) {
            return node;
        } else if (value < node.value) {
            return this.search(value, node.leftChild)
        } else {
            return this.search(value, node.rightChild)
        }
    }

    insert(value, node = this.#root) {
        if (!node) return null;
        if (value < node.value) {
            if (!node.leftChild) {
                node.leftChild = new TreeNode(value);
            } else {
                this.insert(value, node.leftChild);
            }
        } else if (value > node.value) {
            if (!node.rightChild) {
                node.rightChild = new TreeNode(value);
            } else {
                this.insert(value, node.rightChild);
            }
        }
    }

    traverseAndPrint(node = this.#root) {
        if (node === null) return;
        this.traverseAndPrint(node.leftChild);
        console.log(node.value);
        this.traverseAndPrint(node.rightChild);
    }

    delete(value, node = this.#root) {
        // todo: implement method
    }
}

const tree = new BinaryTree(10);

tree.insert(20);
tree.insert(4);
tree.insert(5);

// const node = tree.search(4);
// console.log(node.value);
// console.log(node.leftChild);
// console.log(node.rightChild.value);

tree.traverseAndPrint();
