class Employee
{
  private id: number;
  name: string;
  dept:string;
  protected designation : string;
  
  display(): void
  {
     console.log ( "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
  } }
class regular_employee extends Employee
{
   salary : number;
   
   constructor ( name : string, dept: string, designation : string, salary: number)
   {  
     super();   

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


var regular_employeeObj = new regular_employee( "Akriti", "IT" , "Project Manager", 500000);

regular_employeeObj.display();
