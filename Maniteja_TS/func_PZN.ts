function pzn(number1) {
    var status = (number1 > 0) ? "Positive" : (number1 == 0 ? "Zero" : "Negative");
    return status;
}
console.log(pzn(-12));