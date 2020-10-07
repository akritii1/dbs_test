var Employee2 = /** @class */ (function () {
    function Employee2(id, name, designation, dept) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.dept = dept;
    }
    Employee2.prototype.display = function () {
        console.log("ID: " + this.id + "    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation);
    };
    return Employee2;
}());
var obj = new Employee2(101, "Piyush", "IT", "Manager");
obj.display();
