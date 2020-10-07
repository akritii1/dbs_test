var Employee1 = /** @class */ (function () {
    function Employee1(id, name, designation, dept) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.dept = dept;
    }
    Employee1.prototype.display = function () {
        console.log("ID: " + this.id + "    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation);
    };
    return Employee1;
}());
var obj = new Employee1(101, "Piyush", "IT", "Manager");
obj.display();
