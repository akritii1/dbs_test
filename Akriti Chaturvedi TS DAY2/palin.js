var data;
data = 20;
data = "mom";
var flag = 0;
for (var i = 0; i < data.length / 2; i++) {
    if (data[i] != data[data.length - i - 1]) {
        flag = 1;
    }
}
if (flag == 0) {
    console.log("palindrome");
}
else {
    console.log("not palindrome");
}
if (typeof data == "string") {
    console.log("string");
}
else {
    console.log("number");
}
