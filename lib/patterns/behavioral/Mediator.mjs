class Participant {
    #chat = null;
    #name = null;

    constructor(name) {
        this.#name = name;
    }

    set chat(chat) {
        this.#chat = chat;
    }

    get name() {
        return this.#name;
    }

    sendMessage(message, to) {
        this.#chat.sendMessage(message, this.#name, to);
    }

    receive(message, from) {
        console.log(message, from);
    }
}

class ChatRoom {
    #participants = {};

    register(user) {
        this.#participants[user.name] = user;
        user.chat = this;
    }

    sendMessage(message, from, to) {
        const user = this.#participants[to];
        if (user) {
            user.receive(message, from);
        }
    }
}


const alex = new Participant('Alex');
const ihor = new Participant('Ihor');

const chat = new ChatRoom();

chat.register(alex);
chat.register(ihor);

alex.sendMessage('Hello Ihor! How are you?', ihor.name);
