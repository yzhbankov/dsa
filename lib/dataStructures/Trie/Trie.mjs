class TrieNode {

    children = null;

    constructor() {
        this.children = {};
    }

    items() {
        return Object.keys(this.children);
    }
}

export class Trie {

    #root = null;

    constructor() {
        this.#root = new TrieNode();
    }

    search(word) {
        let currentNode = this.#root;
        let i = 0;
        while(i <= word.length - 1) {
            const char = word[i];
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char];
            } else {
                return null;
            }
            i += 1;
        }
        return currentNode;
    }

    insert(word = null, node = this.#root) {
        if (!word) return null;
        let i = 0;
        let currentNode = node;
        while(i <= word.length - 1) {
            const char = word[i];
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char];
            } else {
                const newNode = new TrieNode();
                currentNode.children[char] = newNode;
                currentNode = newNode;
            }
            i += 1;
        }
        currentNode.children['*'] = null;
    }

    autocomplete(prefix) {
        const node = this.search(prefix);
        if (node) {
            return this.collectAllWords(node);
        }
        return null;
    }

    collectAllWords(node = this.#root, word = '', words = []) {
        let currentNode = node;

        for (let key of currentNode.items()) {
            if (key === "*") {
                words.push(word);
            } else {
                this.collectAllWords(currentNode.children[key], word + key, words);
            }
        }
        return words;
    }
}

const trie = new Trie();

trie.insert('abcd');
trie.insert('bca');
trie.insert('acbdfv3');

console.log(trie.collectAllWords());
console.log(trie.search('abc'));
console.log(trie.search('bcc'));
console.log(trie.autocomplete('a'));

