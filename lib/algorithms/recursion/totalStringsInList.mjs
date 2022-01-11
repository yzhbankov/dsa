function totalStringsInList(list, i = 0) {
    if (i === list.length) return 0;

    return list[i].length + totalStringsInList(list, i + 1);
}
const list = ['ab', 'cde', 'fghij'];

console.log(totalStringsInList(list));
