class RoundRod {
    #radius = null;

    constructor(radius) {
        this.#radius = radius;
    }

    get radius() {
        return this.#radius;
    }
}

class SquareRod {
    #width = null;

    constructor(width) {
        this.#width = width;
    }

    get width() {
        return this.#width;
    }
}

class RodAdapter extends SquareRod {
    constructor(props) {
        super(props);
    }
    // PiR2

    get radius() {
        const area = Math.pow(this.width, 2);
        return Math.sqrt(area / Math.PI);
    }
}

const roundRod = new RoundRod(10);
const squareRod = new RodAdapter(17.725);

console.log('roundRod.radius: ', roundRod.radius);
console.log('squareRod.radius: ', squareRod.radius);
