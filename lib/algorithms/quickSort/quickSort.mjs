// time Big O (N * logN) memory O(N^2)
export function quickSort(list) {
    const listLength = list.length;
    if (listLength <= 1) return list;
    const pivotIndex = Math.floor(listLength / 2);
    const pivot = list[pivotIndex];
    const left = [];
    const right = [];
    const pivots = [];

    for (let i = 0; i < listLength; i += 1) {
        if(list[i] < pivot) {
            left.push(list[i]);
        } else if (list[i] > pivot) {
            right.push(list[i]);
        } else {
            pivots.push(list[i]);
        }
    }
    return [].concat(quickSort(left), pivots, quickSort(right));
}

function partitioning(list, leftPointer = 0, rightPointer = list.length - 1) {
    const pivotIndex = rightPointer;
    const pivot = list[pivotIndex];
    rightPointer -= 1;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        while(list[leftPointer] < pivot) {
            leftPointer += 1;
        }

        while(list[rightPointer] > pivot) {
            rightPointer -= 1;
        }

        if (leftPointer >= rightPointer) {
            break;
        } else {
            const temp = list[leftPointer];
            list[leftPointer] = list[rightPointer];
            list[rightPointer] = temp;
            leftPointer += 1;
        }
    }

    const temp = list[leftPointer];
    list[leftPointer] = list[pivotIndex];
    list[pivotIndex] = temp;

    return leftPointer;
}

// time Big O O(N * logN) memory O(1)
function quickSort2(list, leftIndex = 0, rightIndex = list.length - 1) {
    if (rightIndex - leftIndex <= 0) return list;
    const pivotIndex = partitioning(list, leftIndex, rightIndex);

    quickSort2(list, leftIndex, pivotIndex - 1);
    quickSort2(list, pivotIndex +  1, rightIndex);
}


const list = [2,1,4,2,1,6,10,7,3,5];

quickSort([...list]);
quickSort2([...list]);
