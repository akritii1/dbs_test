var Student = /** @class */ (function () {
    function Student() {
    }
    ;
    Student.prototype.assign_data = function (id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    };
    Student.prototype.display = function () { console.log("ID : " + this.id + "     Name: " + this.name + "    Stream : " + this.stream); };
    return Student;
}());
var stdObj = new Student();
stdObj.assign_data(87, "Swapnil", "Computer Science");
stdObj.display();
