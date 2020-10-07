var Stu = /** @class */ (function () {
    function Stu() {
    }
    Stu.prototype.assign_data = function (roll, name, course_code) {
        this.roll = roll;
        this.name = name;
        this.course_code = course_code;
    };
    Stu.prototype.display = function () { console.log("roll : " + this.roll + "     name: " + this.name + "    course_code : " + this.course_code); };
    return Stu;
}());
var stuObj = new Stu();
stuObj.assign_data(101, "Akriti", 10);
stuObj.display();
