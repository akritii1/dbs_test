var myClass = /** @class */ (function () {
    function myClass() {
        this.myData = 98;
        console.log("Hello from constructor..");
    }
    myClass.prototype.returnData = function () {
        console.log("Hello from returndata function.");
        return this.myData;
    };
    return myClass;
}());
var myClassObj = new myClass;
console.log("Class data : " + myClassObj.returnData());
