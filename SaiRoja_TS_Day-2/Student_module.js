"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.assign_Data = function (id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    };
    Student.prototype.display = function () {
        console.log("ID : " + this.id);
        console.log("Name : " + this.name);
        console.log("Stream : " + this.stream);
    };
    return Student;
}());
var student1 = new Student();
student1.assign_Data(123, "Ram", "IT");
student1.display();
