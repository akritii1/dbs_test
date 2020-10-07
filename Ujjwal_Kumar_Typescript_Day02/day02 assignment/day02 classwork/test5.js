var Myclass = /** @class */ (function () {
    function Myclass(data) {
        this.myData = 98;
        this.myData = data;
    }
    Myclass.prototype.returnData = function () { return this.myData; };
    return Myclass;
}());
var myClassObj1 = new Myclass(98);
console.log("Class data : " + myClassObj1.returnData());
