class Book {
    #id = null;
    #price = null;
    #name = null;
    constructor(id, price, name) {
        this.#id = id;
        this.#price = price;
        this.#name = name;
    }

    get id() { return this.#id; }
    get price() { return this.#price; }
    get name() { return this.#name; }

    accept(visitor) {
        return visitor.visit(this);
    }
}

class Visitor {
    visit(book) {
        let cost = 0;
        if (book.price > 50) {
            cost = book.price * 0.5;
        } else {
            cost = book.price * 2;
        }
        console.log(book.name, ' price: ', cost);
        return cost;
    }
}

const book = new Book(1, 100, 'Title');
const visitor = new Visitor();

book.accept(visitor);
