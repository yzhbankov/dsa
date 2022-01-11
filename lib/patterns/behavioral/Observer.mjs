class HandlerOne {
    handle(data) {
        console.log('Handle data One', data);
    }
}

class HandlerTwo {
    handle(data) {
        console.log('Handle data Two', data);
    }
}

class Receiver {
    #handlers = [];

    subscribe(handler) {
        this.#handlers.push(handler);
    }

    unsubscribe(handler) {
        this.#handlers = this.#handlers.filter(_handler => _handler !== handler);
    }

    handleMessage(data) {
        this.#handlers.forEach(handler => handler.handle(data));
    }
}

const receiver = new Receiver();
receiver.subscribe(new HandlerOne());
receiver.subscribe(new HandlerTwo());

receiver.handleMessage('observer message');
