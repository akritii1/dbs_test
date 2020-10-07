function fib(n) {
    var num1 = 0;
    var num2 = 1;
    var i;
    console.log(num1);
    console.log(num2);
    var temp;
    for (i = 1; i <= (n - 2); i++) {
        temp = num1 + num2;
        console.log(temp);
        num1 = num2;
        num2 = temp;
    }
}
fib(10);
