var empData = /** @class */ (function () {
    //constructor() { console.log ("This is constructor..");}  
    function empData(id, name, dept, designation) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
    }
    empData.prototype.displayData = function () {
        console.log("ID: " + this.id + "    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation);
    };
    return empData;
}());
//var myClassObj = new myClass;
//console.log ("Class data : " + myClassObj.returnData());
var myClassObj1 = new empData(101, "Raven", "Marketing", "VP");
myClassObj1.displayData();
