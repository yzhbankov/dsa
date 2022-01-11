class User {
    #name = null;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    get info() {
        return `Name: ${this.name}`;
    }
}

class SuperUser {
    #age = null;
    #user = null;

    constructor(user, age) {
        this.#age = age;
        this.#user = user;
    }

    get info() {
        return `Name: ${this.#user.name}, age: ${this.#age}`;
    }
}

const user = new User('Ihor');
const superUser = new SuperUser(user, 36);

console.log(user.info);
console.log(superUser.info);
