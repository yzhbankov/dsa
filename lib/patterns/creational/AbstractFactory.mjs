class User {
    #name = null;
    #age = null;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
}

class UserFactory {
    create(name, age) {
        return new User(name, age);
    }
}

const userFactory = new UserFactory();

const ivan = userFactory.create('Ivan', 18);
const ihor = userFactory.create('Ihor', 18);

