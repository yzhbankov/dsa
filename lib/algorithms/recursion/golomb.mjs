function golomb(n) {
    if (n === 1) return 1;
    return 1 + golomb(n - golomb(golomb(n - 1)))
}

function golombMemo(n, memo = {}) {
    if (n === 1) return 1;
    if (!memo[n]) {
        memo[n] = 1 + golombMemo(n - golombMemo(golombMemo(n - 1, memo), memo), memo);
    }
    return memo[n];
}

console.time('golomb');
console.log(golomb(55));
console.timeEnd('golomb');

console.time('golombMemo');
console.log(golombMemo(55));
console.timeEnd('golombMemo');
