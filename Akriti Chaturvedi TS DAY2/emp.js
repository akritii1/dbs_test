var myClass = /** @class */ (function () {
    //constructor() { console.log ("This is constructor..");}  
    function myClass(id, name, dept) {
        this.id = 30;
        this.name = "Akriti Chaturvedi";
        this.dept = "IT";
        id = this.id;
        name = this.name;
        dept = this.dept;
    }
    myClass.prototype.returnID = function () { return this.id; };
    myClass.prototype.returnNAME = function () {
        return this.name;
    };
    myClass.prototype.returnDept = function () {
        return this.dept;
    };
    return myClass;
}());
//var myClassObj = new myClass;
//console.log ("Class data : " + myClassObj.returnData());
var myClassObj1 = new myClass(1, "Akr", "it");
console.log("ID : " + myClassObj1.returnID());
console.log("Name : " + myClassObj1.returnNAME());
console.log("Dept : " + myClassObj1.returnDept());
