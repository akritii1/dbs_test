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
var empData = /** @class */ (function () {
    function empData() {
    }
    empData.prototype.display = function () {
        console.log("    Name : " + this.name + "    Dept : " + this.dept + "    Designation : " + this.designation);
    };
    return empData;
}());
var regular_employee = /** @class */ (function (_super) {
    __extends(regular_employee, _super);
    function regular_employee(name, dept, designation, salary) {
        var _this = _super.call(this) || this;
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
}(empData));
var regular_employeeObj = new regular_employee("John", "CS", "Manager", 12500);
regular_employeeObj.display();
