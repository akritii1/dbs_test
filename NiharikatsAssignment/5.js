var global_var = 10;
var myclass = /** @class */ (function () {
    function myclass() {
        this.local_var = 40;
    }
    myclass.prototype.local_data = function () {
        var local_var = 60;
        return local_var;
    };
    myclass.static_var = 20;
    return myclass;
}());
console.log("Global variable : " + global_var);
console.log("Static variable : " + myclass.static_var);
var myclassObj = new myclass();
console.log("Class variable " + myclassObj.local_var);
console.log("Local variable data " + myclassObj.local_data());
