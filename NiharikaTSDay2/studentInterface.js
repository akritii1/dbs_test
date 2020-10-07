var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.assign_data = function (roll, name, course_code) {
        this.roll = roll;
        this.name = name;
        this.course_code = course_code;
    };
    Student.prototype.display = function () { console.log("rollnumber : " + this.roll + "     name: " + this.name + "    course_code : " + this.course_code); };
    return Student;
}());
var stuObj = new Student();
stuObj.assign_data(100, "Niharika", 10);
stuObj.display();
