interface StudentInterface
{
	assign_Data(id:number,name:string,stream:string):void;
	display():void;
}
class Student implements StudentInterface{
	private id:number;
	private name:string;
	private stream:string;
	assign_Data(id:number,name:string,stream:string)
	{
		this.id=id;
		this.name = name;
		this.stream=stream;
	}
	display():void
	{
		console.log("ID : "+this.id);
		console.log("Name : "+this.name);
		console.log("Stream : "+this.stream);
	}
}
var student1=new Student();
student1.assign_Data(123,"Ram","IT");
student1.display();
//console.log(student1.id); // Data hiding proprty doesnot allow to access.

		
		