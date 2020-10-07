function isPrime(num) {
    if (num % 2 == 0) {
        return false;
    }
    var n = Math.sqrt(num);
    for ( var i = 3; i <= n; i += 2 ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}
function print1(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr);
}
print1(30);