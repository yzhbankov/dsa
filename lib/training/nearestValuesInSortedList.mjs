function searchNearest(list, target, number) {
    const result = [];
    function findNearestIndex(list, target) {
        for (let i = 0; i < list.length; i += 1) {
            if (list[i + 1] >= target && list[i] <= target) return i;
        }
    }
    function diff(itemOne, itemTwo) { return Math.abs(itemTwo - itemOne); }

    const index = findNearestIndex(list, target);
    let leftRadius = 0;
    let rightRadius = 1;

    while (result.length < number && index - leftRadius > 0 && index + rightRadius < list.length - 1) {
        const leftDiff = diff(list[index - leftRadius], target);
        const rightDiff = diff(list[index + rightRadius], target);
        if(leftDiff < rightDiff) {
            result.push(list[index - leftRadius]);
            leftRadius += 1;
        } else {
            result.push(list[index + rightRadius]);
            rightRadius += 1;
        }
    }
    return result;
}

const listTwo = [1,2,3,4,5,6,7,8,9];

console.log(searchNearest(listTwo, 5, 5));
