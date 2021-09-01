function selectionSort(list) {
    const listLength = list.length;

    for (let i = 0; i < listLength; i += 1) {
        let lowestValueIndex = i;
        for (let j = i + 1; j < listLength; j += 1) {
            if (list[j] < list[lowestValueIndex]) {
                lowestValueIndex = j;
            }
        }
        let temp = list[i];
        list[i] = list[lowestValueIndex];
        list[lowestValueIndex] = temp;
    }
    return list;
}

const list = [2,1,4,2,1,5,7,3,5];

console.log(selectionSort(list));
