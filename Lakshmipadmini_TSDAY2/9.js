/*Write a typescript to demonstrate inheritance.
Have a baseclass as Employee, and derived classes as regular_employee
and contract_employee.  Regular employee works on per month package
and contact_employee works on a contract basis and is paid per hr.
Decide the desired fields accordinly in each of the class and also
demostrate method overriding.*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//This class demonstrates the inheritance and method overriding.
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("ID: " + this.id + "    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation);
    };
    return Employee;
}());
var regular_employee = /** @class */ (function (_super) {
    __extends(regular_employee, _super);
    function regular_employee(id, name, dept, designation, salary) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.designation = designation;
        _this.salary = salary;
        return _this;
    }
    regular_employee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Salary : " + this.salary);
    };
    return regular_employee;
}(Employee));
var contract_employee = /** @class */ (function (_super) {
    __extends(contract_employee, _super);
    function contract_employee(id, name, dept, designation, salary, hours) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.designation = designation;
        _this.salary = salary;
        _this.hours = hours;
        return _this;
    }
    contract_employee.prototype.display = function () {
        _super.prototype.display.call(this);
        var sal = this.salary * this.hours;
        console.log("Salary : " + sal);
    };
    return contract_employee;
}(Employee));
var regular_employeeObj = new regular_employee(1, "Padmini", "IT", "Project Manager", 500000);
regular_employeeObj.display();
var contract_employeeObj = new contract_employee(102, "Padmini V", "ITT", "Developer", 5000, 12);
contract_employeeObj.display();
