class DbProjects {
    #projects = null;

    constructor() {
        this.#projects = {
            'one': [{}],
            'two': [{}, {}],
            'three': [{}, {}, {}]
        }
    }

    list(name) {
        return this.#projects[name]
    }
}

class User {
    #cache = {};
    #db = null;

    constructor() {
        this.#db = new DbProjects();
    }

    projects(name) {
        if (!this.#cache[name]) {
            this.#cache[name] = this.#db.list(name);
        }

        return this.#cache[name];
    }
}

const user = new User();

console.log(user.projects('one'));
console.log(user.projects('two'));
console.log(user.projects('three'));
