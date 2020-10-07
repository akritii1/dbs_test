class Employee
{
	id:number;
	name:string;
	dept:string;
	designation:string;
	salary:number;
	constructor(id:number,name:string,dept:string,designation:string)
	{
		this.id=id;
		this.name = name;
		this.dept= dept;
		this.designation =designation;
	}
	display_Data():void
	{
		console.log("ID : "+this.id);
		console.log("Name : "+this.name);
		console.log("Department : "+this.dept);
		console.log("Designation : "+this.designation);
		console.log("Salary : "+this.salary);
	}
}
class regular_employee extends Employee
{
	setSal(salary:number):void
	{
		this.salary=salary;
	}
}
class contract_employee extends Employee
{
	setSal(hours:number):void
	{
		this.salary=hours*1000;
	}
}
var reg_emp=new regular_employee(123,"Krish","IT","Manager");
reg_emp.setSal(60000);
reg_emp.display_Data();
var con_emp=new contract_employee(10,"Ram","IT","Manager");
con_emp.setSal(50);
con_emp.display_Data();