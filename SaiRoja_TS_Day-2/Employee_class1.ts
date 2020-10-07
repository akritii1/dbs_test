class Employee
{
	id:number;
	name:string;
	dept:string;
	designation:string;
	constructor()
	{
		console.log("This is Constructor");
		this.id=10;
		this.name = "Ram";
		this.dept= "IT";
		this.designation ="Manager";
		
	}
	/*constructor(id:number,name:string,dept:string,designation:string)
	{
		console.log("This is Parameterised Constructor");
		this.id=id;
		this.name = name;
		this.dept= dept;
		this.designation =designation;
	}*/
	display_Data():void
	{
		console.log("ID : "+this.id);
		console.log("Name : "+this.name);
		console.log("Department : "+this.dept);
		console.log("Designation : "+this.designation);
	}
}
var default_obj=new Employee;
console.log("Without arguments ");
default_obj.display_Data();
//var para_obj=new Employee(123,"Krish","IT","Manager");
//console.log("With arguments ");
//para_obj.display_Data();
