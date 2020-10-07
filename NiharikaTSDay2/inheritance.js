var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
    function contract_employee(id, name, dept, designation, days, perday) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.dept = dept;
        _this.designation = designation;
        _this.days = days;
        _this.perday = perday;
        return _this;
    }
    contract_employee.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Days : " + this.days + "perday : " + this.perday);
    };
    return contract_employee;
}(Employee));
var empobj = new Employee(1, "neha", "IT", "Assosiate");
empobj.display();
var regular_employeeObj = new regular_employee(2, "abhi", "IT", "Project Manager", 500000);
regular_employeeObj.display();
var contract_employeeObj = new contract_employee(3, "adi", "CSE", "Manager", 5, 4000);
regular_employeeObj.display();
