// 1,3,6,10,15,21

function triangleNumber(n) {
    if (n === 1) return n;

    return 1 + triangleNumber(n - 1);
}

console.log(triangleNumber(7));
