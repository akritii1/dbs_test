var Student = /** @class */ (function () {
    function Student(ID, Name, Stream) {
        this.ID = ID;
        this.Name = Name;
        this.Stream = Stream;
    }
    Student.prototype.display = function () {
        console.log("ID : " + this.ID + " name: " + " Name : " + this.Name + "Stream : " + this.Stream);
    };
    return Student;
}());
var bankObj = new Student(12, "Neha", "CSE");
bankObj.display();
//console.log ("Private data : "+bankObj.acct_number);
