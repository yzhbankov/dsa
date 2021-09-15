export function insertionSort(list) {
    const listLength = list.length;

    for (let i = 1; i < listLength; i += 1) {
        let j = i - 1;
        const currentValue = list[i];
        while(j >= 0) {
            if(list[j] > currentValue) {
                list[j + 1] = list[j];
                j -= 1;
            } else {
                break;
            }
        }
        list[j + 1] = currentValue;
    }
    return list;
}
