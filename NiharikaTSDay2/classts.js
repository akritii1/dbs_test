var myClass = /** @class */ (function () {
    function myClass() {
        this.myData = 30;
        console.log("This is constructor..");
    }
    myClass.prototype.returnData = function () { return this.myData; };
    return myClass;
}());
var myClassObj = new myClass;
console.log("Class data : " + myClassObj.returnData());
