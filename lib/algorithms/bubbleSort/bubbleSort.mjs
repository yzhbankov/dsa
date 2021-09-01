function bubbleSort(list) {
    const listLength = list.length;

    for (let i = 0; i < listLength; i +=1) {
        for (let j = 0; j < listLength; j +=1) {
            if (list[i] < list[j]) {
                const temp = list[j];
                list[j] = list[i];
                list[i] = temp;
            }
        }
    }
    return list;
}
