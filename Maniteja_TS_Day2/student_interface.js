var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.add_data = function (roll_no, name, stream, year) {
        this.roll_no = roll_no;
        this.name = name;
        this.stream = stream;
        this.year = year;
    };
    student.prototype.displayData = function () {
        console.log("Name is: " + this.name + ", whose roll number is " + this.roll_no
            + " studying in " + this.year + " year " + this.stream + " branch.");
    };
    return student;
}());
var student_obj = new student();
student_obj.add_data(101, "John", "CS", 2);
student_obj.displayData();
