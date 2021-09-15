class TreeNode {
    /**
     * @class {TreeNode}
     */

    /**
     * @type {number|null} binary tree node value
     */
    #value = null;

    /**
     * @type {TreeNode} link the the left child node
     */
    #leftChild = null;

    /**
     * @type {TreeNode} link the the right child node
     */
    #rightChild = null;

    constructor(value, leftChild = null, rightChild = null) {
        this.#value = value;
        this.#leftChild = leftChild;
        this.#rightChild = rightChild;
    }

    /**
     * @method returns node value
     * @return {number}
     */
    get value() { return this.#value; }

    /**
     * @method returns link to the left child node
     * @return {TreeNode}
     */
    get leftChild() { return this.#leftChild; }

    /**
     * @method returns link to the right child node
     * @return {TreeNode}
     */
    get rightChild() { return this.#rightChild; }

    /**
     * @method set link to the left child node
     */
    set leftChild(node) { this.#leftChild = node; }

    /**
     * @method set link to the right child node
     */
    set rightChild(node) { this.#rightChild = node; }
}

export class BinaryTree {
    /**
     * @class {BinaryTree}
     */

    /**
     * @type {TreeNode|null}
     */
    #root = null;

    constructor(value) {
        this.#root = new TreeNode(value);
    }

    /**
     * @method returns link to the node with the searched value
     * @param {number} value - searched value
     * @return {TreeNode}
     */
    search(value, node = this.#root) {
        if (!node || node.value === value) {
            return node;
        } else if (value < node.value) {
            return this.search(value, node.leftChild)
        } else {
            return this.search(value, node.rightChild)
        }
    }

    /**
     * @method insert value to the tree
     * @param {number} value - inserted value
     * @param {TreeNode|null} node
     * @return {TreeNode}
     */
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

    /**
     * @method prints all the node values of a tree
     * @param {TreeNode|null} node
     */
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
