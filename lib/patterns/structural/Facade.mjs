class Api {
    get login() {
        // ...
        return { user: { id: 1 }, token: null, status: 200 }
    }

    get logout() {
        // ...
        return { user: {}, token: null, status: 200 }
    }

    get loadProjects() {
        // ...
        return { projects: [] }
    }
}


class ApiFacade {
    #api = null;

    constructor(api) {
        this.#api = api;
    }

    get projects() {
        const { user } = this.#api.login;
        const { projects } = this.#api.loadProjects;
        this.#api.logout;

        return projects;
    }
}

const api = new Api();
const apiFacade = new ApiFacade(api);

console.log(apiFacade.projects);
