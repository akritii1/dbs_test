function Palindrome(n) {
    if (typeof (n) == "number") {
        //var n:number|string;
        n = 1234;
        var num = n;
        var rev = 0;
        while (num > 0) {
            rev = (rev * 10) + (num % 10);
            num = num / 10;
        }
        console.log(rev);
        if (rev == n)
            console.log("The number " + n + " is a Palindrome");
        else
            console.log("The number " + n + " is not a Palindrome");
    }
    else {
        var str;
        str = str.split('').reverse().join('');
        console.log(str);
        if (str == n)
            console.log("The String " + n + " is a Palindrome");
        else
            console.log("The String " + n + " is not a Palindrome");
    }
}
Palindrome(1221);
Palindrome("mom");
