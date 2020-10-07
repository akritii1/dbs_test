class student{
	private id: number;
	private name: string;
	private stream: string;
	
	constructor(id:number,name:string,stream:string){
		this.id=id;
		this.name=name;
		this.stream=stream;
	}
	
	displayData(){
		console.log("Student id: "+ this.id  + ". Name is: " + this.name + " and stream is " + this.stream);
	}
}
var student_obj = new student(101,"John","CSE");
student_obj.displayData();	