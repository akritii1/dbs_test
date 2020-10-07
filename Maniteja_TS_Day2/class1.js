var myClass = /** @class */ (function () {
    function myClass() {
        this.myData = 30;
        console.log("this is a constructor");
    }
    myClass.prototype.returnData = function () {
        return this.myData;
    };
    return myClass;
}());
var myClassObj = new myClass;
console.log("class data: " + myClassObj.returnData);
