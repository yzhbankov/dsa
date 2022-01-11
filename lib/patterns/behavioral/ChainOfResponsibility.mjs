class Request {
    #count = 0;

    get() {
        this.#count += 1;
        console.log('count:  ', this.#count);
        return this;
    }
}

const request = new Request();

request.get().get().get().get();
