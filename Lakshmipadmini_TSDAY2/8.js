/*Write an employee class with attributes ID, name, dept and designation.
 Initialize them in the constructor and display the result.
 Add constructor with arguments and pass the data while creating the
 object and display the employee data.  Have a function by name display()
 to display the employee data.*/
var employeeDetails = /** @class */ (function () {
    /*constructor()
     {
         this.id = 10;
         this.name = "Padmini";
         this.dept = "ITT";
         this.designation = "Application Developer";
  
     } */
    function employeeDetails(id, name, dept, designation) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.designation = designation;
    }
    employeeDetails.prototype.display = function () {
        console.log("Id of the employee: " + this.id);
        console.log("Name of the employee: " + this.name);
        console.log("Department of the employee: " + this.dept);
        console.log("designation of the employee: " + this.designation);
    };
    return employeeDetails;
}());
//var obj = new employeeDetails;
//obj.display();
var obj1 = new employeeDetails(21, "Padmini", "ITT", "Developer");
obj1.display();
