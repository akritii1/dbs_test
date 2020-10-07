function factorial(n, value) {
    if (value === void 0) { value = 1; }
    if (n === 1)
        return value;
    return factorial(n - 1, n * value);
}
console.log(factorial(5)); //  yields 120
