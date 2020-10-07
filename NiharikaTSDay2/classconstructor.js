var Employee = /** @class */ (function () {
    function Employee(val1, val2, val3, val4) {
        this.id = val1;
        this.name = val2;
        this.dept = val3;
        this.designation = val4;
    }
    Employee.prototype.display = function () {
        console.log("ID: " + this.id + "    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation);
    };
    return Employee;
}());
var myClassObj2 = new Employee(10, "neha", "cse", "mot");
myClassObj2.display();
