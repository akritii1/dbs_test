var i, n, t1 = 0, t2 = 1, nextTerm;
console.log("Fibonacci Series of first 10 numbers: ");
for (i = 1; i <= 10; ++i) {
    console.log(t1);
    nextTerm = t1 + t2;
    t1 = t2;
    t2 = nextTerm;
}
