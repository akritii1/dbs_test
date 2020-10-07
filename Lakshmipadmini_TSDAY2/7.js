function palin(n) {
    var n1 = n;
    var r = 0;
    var p = 0;
    while (n > 0) {
        r = n % 10;
        p = p * 10 + r;
        n = (n / 10) | 0;
    }
    console.log(p);
    if (n1 == p)
        return "palidrome";
    else
        return "not a palindrome";
}
function palind(s) {
    return s.split('').reverse().join('') === s;
}
var data;
data = 525;
console.log("Palin for num:" + palin(data));
data = "tomato";
console.log("Palin for str:" + palind(data));
