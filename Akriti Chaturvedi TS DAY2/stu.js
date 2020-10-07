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
    myClass.prototype.display = function () {
        console.log("ID : " + this.id);
        console.log("Name : " + this.name);
        console.log("Dept : " + this.dept);
    };
    return myClass;
}());
//var myClassObj = new myClass;
//console.log ("Class data : " + myClassObj.returnData());
var myClassObj1 = new myClass(1, "Akr", "it");
myClassObj1.display();
