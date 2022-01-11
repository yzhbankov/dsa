function fibonacci(n) {
    let i = 1;
    const result = [0, 1];
    if (n < 2) return undefined;
    while ( i < n - 1) {
        const next = result[i] + result[i - 1];
        result.push(next);
        i += 1;
    }
    return result;
}

console.log(fibonacci(100));
