var global_var = 20;
var Myclass = /** @class */ (function () {
    function Myclass() {
        this.local_var = 50;
    }
    Myclass.prototype.local_data = function () {
        var local_val = 10;
        return local_val;
    };
    Myclass.static_var = 60;
    return Myclass;
}());
console.log("global_var" + global_var);
console.log("static_var" + Myclass.static_var);
var obj = new Myclass();
console.log("class variable" + obj.local_var);
console.log("local variable data" + obj.local_data());
