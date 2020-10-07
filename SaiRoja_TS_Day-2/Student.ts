class Student
{
	private id:number;
	private name:string;
	private stream:string;
	constructor(id:number,name:string,stream:string)
	{
		this.id=id;
		this.name = name;
		this.stream=stream;
	}
	public display():void
	{
		console.log("ID : "+this.id);
		console.log("Name : "+this.name);
		console.log("Stream : "+this.stream);
	}
}
var student1=new Student(123,"Ram","IT");
student1.display();
//console.log(student1.id); // Data hiding proprty doesnot allow to access.

		
		