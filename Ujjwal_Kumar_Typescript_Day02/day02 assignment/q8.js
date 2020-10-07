var Employee = /** @class */ (function () {
    function Employee(id, name, dept, designation, salary) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("ID: " + this.id + "    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation + "     salary : " + this.salary);
    };
    return Employee;
}());
var employeeObj = new Employee(32, "Rakesh", "Sales", "Manager", 89000);
employeeObj.display();
