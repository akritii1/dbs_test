var n = 5;
var fact = 1;
if (n < 0)
    console.log("Error!");
else {
    for (var i = 1; i <= n; ++i) {
        fact *= i;
    }
    console.log("factorial:" + fact);
}
