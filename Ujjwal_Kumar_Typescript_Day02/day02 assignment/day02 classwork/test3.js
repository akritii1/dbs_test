var data;
data = 20;
console.log("Variable as number :" + data);
data = "This is a string";
console.log("Variable as string : " + data);
function dataType(data) {
    if (typeof data == "string")
        console.log("String data");
    else if (typeof data == "number")
        console.log("Data is number");
}
dataType(10);
dataType("This is string");
dataType(data);
