var Student1 = /** @class */ (function () {
    function Student1(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    Student1.prototype.getId = function () {
        return this.id;
    };
    Student1.prototype.getName = function () {
        return this.name;
    };
    Student1.prototype.getStream = function () {
        return this.stream;
    };
    return Student1;
}());
var objstudent = new Student1(101, "Abhay", "CSE");
console.log("ID: " + objstudent.getId());
console.log("Name: " + objstudent.getName());
console.log("Stream: " + objstudent.getStream());
