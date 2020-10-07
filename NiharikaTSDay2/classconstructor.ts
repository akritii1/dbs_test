class Employee
{
  id: number;
  name: string;
  dept:string;
  designation : string; 
  constructor(val1 : number , val2 :string , val3 : string , val4 : string) {
	  this.id = val1;
	  this.name = val2;
	  this.dept = val3;
	  this.designation = val4;
	  }  

  display(): void
  {
     console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
  } 
}
var myClassObj2 = new Employee(10,"neha","cse","mot");
myClassObj2.display();