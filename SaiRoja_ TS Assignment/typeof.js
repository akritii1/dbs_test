var data;
data = 123;
console.log("Number " + data);
data = "Hello";
console.log("String " + data);
function type(n) {
    if (typeof (n) == "string")
        console.log("String");
    if (typeof (n) == "number")
        console.log("Number");
}
type(10);
type("hello");
