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
var Employee = /** @class */ (function () {
    function Employee(id, name, dept, designation) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
    }
    Employee.prototype.display_Data = function () {
        console.log("ID : " + this.id);
        console.log("Name : " + this.name);
        console.log("Department : " + this.dept);
        console.log("Designation : " + this.designation);
        console.log("Salary : " + this.salary);
    };
    return Employee;
}());
var regular_employee = /** @class */ (function (_super) {
    __extends(regular_employee, _super);
    function regular_employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    regular_employee.prototype.setSal = function (salary) {
        this.salary = salary;
    };
    return regular_employee;
}(Employee));
var contract_employee = /** @class */ (function (_super) {
    __extends(contract_employee, _super);
    function contract_employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    contract_employee.prototype.setSal = function (hours) {
        this.salary = hours * 1000;
    };
    return contract_employee;
}(Employee));
var reg_emp = new regular_employee(123, "Krish", "IT", "Manager");
reg_emp.setSal(60000);
reg_emp.display_Data();
var con_emp = new contract_employee(10, "Ram", "IT", "Manager");
con_emp.setSal(50);
con_emp.display_Data();
