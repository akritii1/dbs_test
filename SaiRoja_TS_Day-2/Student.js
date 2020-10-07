var Student = /** @class */ (function () {
    function Student(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    Student.prototype.display = function () {
        console.log("ID : " + this.id);
        console.log("Name : " + this.name);
        console.log("Stream : " + this.stream);
    };
    return Student;
}());
var student1 = new Student(123, "Ram", "IT");
student1.display();
console.log(student1.id);
