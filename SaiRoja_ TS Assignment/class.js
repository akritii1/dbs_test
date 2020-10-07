var myclass = /** @class */ (function () {
    function myclass() {
        this.data = 30;
        console.log("This is Constructor");
    }
    myclass.prototype.getData = function () {
        return this.data;
    };
    return myclass;
}());
var obj = new myclass;
console.log("data is " + obj.getData());
