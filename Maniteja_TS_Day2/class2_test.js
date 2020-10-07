var myClass = /** @class */ (function () {
    //constructor() { console.log ("This is constructor..");}  
    function myClass(data) {
        this.myData = 30;
        this.myData = data;
    }
    myClass.prototype.returnData = function () { return this.myData; };
    return myClass;
}());
//var myClassObj = new myClass;
//console.log ("Class data : " + myClassObj.returnData());
var myClassObj1 = new myClass(20);
console.log("Class data : " + myClassObj1.returnData());
