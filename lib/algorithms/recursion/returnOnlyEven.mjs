function returnOnlyEven(list, i = 0) {
    if (i === list.length) return [];
    return [].concat(list[i] % 2 ? [] : list[i], returnOnlyEven(list, i += 1))
}

const list = [1,2,3,4,5,6,7,8,9];

console.log(returnOnlyEven(list));
