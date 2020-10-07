function fact(num1) {
    var i;
    var result = 1;
    for (i = num1; i >= 1; i--) {
        result *= num1;
        num1--;
    }
    console.log("Factorial is :" + result);
}
fact(8);
