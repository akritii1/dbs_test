var student = /** @class */ (function () {
    function student(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    student.prototype.displayData = function () {
        console.log("Student id: " + this.id + ". Name is: " + this.name + "and stream is " + this.stream);
    };
    return student;
}());
var student_obj = new student(101, "John", "CSE");
student_obj.displayData();
