function Parent() {
    const getX = function () {
        return this.x;
    }

    return {
        getX
    }
}

function Child() {
    this.x = 1;
}

Child.prototype = Parent;

const child = new Child();

console.log(child.getX());
