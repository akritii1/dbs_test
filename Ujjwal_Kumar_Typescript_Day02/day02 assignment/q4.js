function isPrime(num) {
    var i;
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function display(n) {
    var total = n;
    var i = 3;
    if (total > 0) {
        console.log(2);
        total--;
        while (total > 0) {
            if (isPrime(i)) {
                console.log(i);
                total--;
            }
            i += 2;
        }
    }
}
display(10);
