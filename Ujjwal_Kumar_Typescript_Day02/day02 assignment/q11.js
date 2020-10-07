var Student = /** @class */ (function () {
    function Student(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    Student.prototype.display = function () {
        console.log("ID : " + this.id + " name: " + this.name + " Stream : " + this.stream);
    };
    return Student;
}());
var stdObj = new Student(897, "John Miller", "Chemical");
stdObj.display();
