class Employee
{
  id: number;
  name: string;
  dept:string;
  designation : string;
  
  display(): void
  {
     console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
  } 
 }
class regular_employee extends Employee
{
   salary : number;
   
   constructor (id:number, name : string, dept: string, designation : string, salary: number)
   {  
     super();   
	this.id = id;
	this.name = name;
	this.dept = dept;
	this.designation = designation;
	this.salary = salary;
   }
   
   display(): void
   {
      super.display();
	  console.log ("Salary : " + this.salary);
   }
}
class contract_employee extends Employee
{
     days:number;
	 perday :number;
	 constructor(id:number, name : string , dept : string , designation : string ,days :number , perday :number)
	 {
	 super();   
	this.id = id;
	this.name = name;
	this.dept = dept;
	this.designation = designation;
	 this.days=days;
	 this.perday=perday;
	 }

display(): void
   {
      super.display();
	  console.log ("Days : " + this.days + "perday : "  + this.perday);
   }
}

var empobj = new Employee(1,"neha","IT","Assosiate");
empobj.display();
var regular_employeeObj = new regular_employee(2, "abhi", "IT" , "Project Manager", 500000);
regular_employeeObj.display();
var contract_employeeObj = new contract_employee(3, "adi", "CSE" , "Manager", 5,4000);
regular_employeeObj.display();

