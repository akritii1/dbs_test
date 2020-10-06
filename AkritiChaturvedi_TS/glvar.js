var global_Var = 20;
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.local_var = 50;
    }
    MyClass.prototype.local_data = function () {
        var local_val = 10;
        return local_val;
    };
    MyClass.static_var = 60;
    return MyClass;
}());
console.log("Global variable: " + global_Var);
console.log("Static variable: " + MyClass.static_var);
var myClassObj = new MyClass();
console.log("Class variable: " + myClassObj.local_var);
console.log("Local variable data: " + myClassObj.local_data());
