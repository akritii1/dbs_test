function dataType(data) {
    var data1 = data.toString();
    return data1.split('').reverse().join('') === data1;
}
console.log(dataType(8976));
console.log(dataType("parrap"));
console.log(dataType(8976798));
console.log(dataType("pgjkgfk"));
