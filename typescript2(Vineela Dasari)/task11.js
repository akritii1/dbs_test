var Student = /** @class */ (function () {
    function Student(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getStream = function () {
        return this.stream;
    };
    return Student;
}());
var objstudent = new Student(101, "Abhay", "CSE");
console.log("ID: " + objstudent.getId());
console.log("Name: " + objstudent.getName());
console.log("Stream: " + objstudent.getStream());
