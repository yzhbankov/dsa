class Shop {
    construct(builder) {
        builder.init();
        builder.step1();
        builder.step2();

        return builder.car
    }

}

class CarBuilder {
    #car = null;

    init() {
        this.#car = new Car();
    }

    step1() {
        this.#car.addDoors();
    }

    step2() {
        this.#car.paint();
    }

    get car() {
        return this.#car;
    }
}

class Car {
    #doors = null;
    #id = null;
    #color = null;
    constructor() {
        this.#id = Math.floor(Math.random() * 10000);
    }
    get id() { return this.#id; }
    get color() { return this.#color; }
    get doors() { return this.#doors; }
    addDoors() {
        this.#doors = 4;
    }
    paint() {
        this.#color = 'white';
    }
}

const shop = new Shop();
const builder = new CarBuilder();

const car = shop.construct(builder);

console.log(car.doors);
