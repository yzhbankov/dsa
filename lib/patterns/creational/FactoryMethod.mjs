class User {
    #name = null;
    #age = null;

    constructor(name, age) {
        this.#age = age;
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }
}

class Gamer extends User {
    #favorites = 'gaming';

    constructor(name, age) {
        super(name, age);
    }

    get favorites() {
        return this.#favorites;
    }
}

class Sportsman extends User {
    #favorites = 'boxing';

    constructor(name, age) {
        super(name, age);
    }

    get favorites() {
        return this.#favorites;
    }
}

class UserFactory {
    create(name, age, type) {
        if (type === 'gaming') return new Gamer(name, age);
        if (type === 'sport') return new Sportsman(name, age);
    }
}

const userFactory = new UserFactory();

const gamerIvan = userFactory.create('Ivan', 18, 'gaming');
const soprtIhor = userFactory.create('Ihor', 18, 'sport');

console.log('name: ', gamerIvan.name, 'age: ', gamerIvan.age, 'favorites: ', gamerIvan.favorites);
console.log('name: ', soprtIhor.name, 'age: ', soprtIhor.age, 'favorites: ', soprtIhor.favorites);
