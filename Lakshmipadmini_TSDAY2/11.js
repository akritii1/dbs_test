/*Create a class student.
 Have the fields ID, Name, stream.
 Define these fields as private and display the content
 of them using a public function.*/
var Student = /** @class */ (function () {
    function Student(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    Student.prototype.display = function () {
        console.log("id:" + this.id + "  name:" + this.name + "   stream:" + this.stream);
    };
    return Student;
}());
var stuobj = new Student(1, "Padmini", "ITT");
stuobj.display();
