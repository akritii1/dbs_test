var fib = 10;
var num1 = 0;
var num2 = 1;
var sum;
for (var i = 0; i <= fib; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(sum);
}
