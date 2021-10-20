export function binarySearch(list, target, start = undefined, end = undefined) {
    if (!list.length) return undefined;
    if (start === undefined) start = 0;
    if (end === undefined) end = list.length - 1;
    if (start === end && list[start] !== target) return undefined;
    if (start === end && list[start] === target) return start;
    if (end - start === 1 && list[end] === target) return end;

    const medianIndex = Math.floor((end + start) / 2);

    if (list[medianIndex] > target) {
        return binarySearch(list, target, start, medianIndex)
    } else if (list[medianIndex] < target) {
        return binarySearch(list, target, medianIndex, end)
    }
    return medianIndex;
}

const list = [1,2,3,4,5,6,7,8,10,234];
console.log(binarySearch(list, 234));
