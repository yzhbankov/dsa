class Geometry {
    #name = null;
    #color = null;

    constructor(name, color) {
        this.#name = name;
        this.#color = color;
    }

    get info() {
        return `Geometry ${this.#name} with color ${this.#color.info}`
    }
}

class Triangle extends Geometry {
    constructor(color) {
        super('triangle', color);
    }
}

class Circle extends Geometry {
    constructor(color) {
        super('circle', color);
    }
}

class Color {
    #name = null;
    constructor(name) {
        this.#name = name;
    }

    get info() {
        return this.#name;
    }
}

class Red extends Color {
    constructor() {
        super('red');
    }
}

class White extends Color {
    constructor() {
        super('white');
    }
}

const red = new Red();
const white = new White();

const redTriangle = new Triangle(red);
const whiteCircle = new Circle(white);
const whiteTriangle = new Triangle(white);
const redCircle = new Circle(red);

[redTriangle, whiteTriangle, whiteCircle, redCircle].forEach(geo => {
    console.log(geo.info);
})

// console.log(redTriangle.info);
// console.log(whiteCircle.info);
// console.log(whiteTriangle.info);
// console.log(redCircle.info);



