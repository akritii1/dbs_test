function fact(n) {
    console.log("factorial of a", n, "is");
    var fact = 1;
    var num;
    for (num = 2; num <= n; ++num) {
        fact = fact * num;
    }
    return fact;
}
console.log(fact(5));
