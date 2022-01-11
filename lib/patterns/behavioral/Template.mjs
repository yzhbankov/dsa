class HouseBuilder {
    buildWalls() {
        console.log('Build walls');
    }
    buildRoof() {
        console.log('Build roof');
    }
    buildFundament() {
        console.log('Build fundament');
    }
    buildHouse() {
        this.buildFundament();
        this.buildWalls();
        this.buildRoof();
    }
}

class WoodenHouse extends HouseBuilder {
    constructor() {
        super();
    }
    buildFundament() {
        console.log('Build fundament for wooden house');
    }
}

class StoneHouse extends HouseBuilder {
    constructor() {
        super();
    }
    buildFundament() {
        console.log('Build fundament for stone house');
    }
}

const woodenHouse = new WoodenHouse();
const stoneHouse = new StoneHouse();

woodenHouse.buildHouse();
stoneHouse.buildHouse();
