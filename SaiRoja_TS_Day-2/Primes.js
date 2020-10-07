function Primes(num) {
    var n;
    var flg;
    var i;
    for (n = 2; n < num; n++) {
        flg = 0;
        for (i = 2; i < n; i++) {
            if (n % i == 0) {
                flg = 1;
                break;
            }
        }
        if (flg == 0)
            console.log(n);
    }
}
Primes(30);
