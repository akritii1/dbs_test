class Employee
{
  id: number;
  name: string;
  dept:string;
  designation : string;
  salary : number;
  constructor (id:number, name : string, dept: string, designation : string, salary: number)
   {    
	this.id = id;
	this.name = name;
	this.dept = dept;
	this.designation = designation;
	this.salary = salary;
   }
  display(): void
  {
     console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation +"     salary : "+this.salary);
  } }

  var employeeObj = new Employee(32, "Rakesh", "Sales" , "Manager", 89000);

employeeObj.display();
