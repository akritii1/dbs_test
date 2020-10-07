var data;
function palindrome(data) {
    return data == data.split('').reverse().join('');
}
function palindrome1(data) {
    var len = data.length;
    for (var i = 0; i < len / 2; i++) {
        if (data[i] !== data[len - 1 - i]) {
            console.log("this is not a palindorme");
        }
        console.log("this is a palindrome");
    }
}
palindrome1(15);
palindrome1("eye");
