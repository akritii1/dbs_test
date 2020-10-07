/*Create a class student. 
 Have the fields ID, Name, stream.
 Define these fields as private and display the content 
 of them using a public function.*/
 
 class Student 
 {
	 private id :number;
	 private name:string;
	 private stream:string;
	 
	constructor(id:number , name:string , stream: string)
	{
		this.id=id;
		this.name=name;
		this.stream=stream;
	}
	
	display():void
	{
		console.log("id:"+this.id + "  name:"+this.name +"   stream:"+this.stream);
	}
 }
 var stuobj=new Student (1,"Padmini","ITT");
 stuobj.display();
 
	 