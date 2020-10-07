var data;
data = 20;
console.log("variable is : " + data);
data = "this is a string";
console.log("variable is a string:" + data);
function dataType(data) {
    if (typeof data == "string")
        console.log("string data");
    else if (typeof data == "number")
        console.log("this is a numebr");
}
dataType(20);
dataType("helloworlds");
