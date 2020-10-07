class Employee
{
  id: number;
  name: string;
  dept:string;
  designation : string;
  
  display(): void
  {
     console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
  } }
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

var regular_employeeObj = new regular_employee(32, "Rakesh", "Sales" , "Manager", 89000);

regular_employeeObj.display();
