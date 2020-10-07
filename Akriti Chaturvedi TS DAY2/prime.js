var i, m = 0, flag = 0;
var n = 3; //it is the number to be checked    
m = n / 2;
if (n == 0 || n == 1) {
    console.log(n + " is not prime number");
}
else {
    for (i = 2; i <= m; i++) {
        if (n % i == 0) {
            console.log(n + " is not prime number");
            flag = 1;
            break;
        }
    }
    if (flag == 0) {
        console.log(n + " is prime number");
    }
}
