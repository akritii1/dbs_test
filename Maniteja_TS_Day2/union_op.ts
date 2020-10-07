var value;
value = 1010;
value = "amama";
var flag = 0;
for (var i = 0; i <= value.length / 2; i++) {
    if (value[i] != value[value.length - i - 1]) {
        flag = 1;
    }
}
if (flag == 0) {
    console.log("It is a Palindrome");
}
else {
    console.log("It is not a palindrome");
}
if (typeof value == "string") {
    console.log("String");
}
value = 30;
if (typeof value == "number") {
    console.log("Number");
}