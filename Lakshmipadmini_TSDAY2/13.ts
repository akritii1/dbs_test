interface Istudent
{
 assign_data(id:number,name:string,stream:string):void;
 display():void;

}

class Student implements Istudent 
 {
	 private id :number;
	 private name:string;
	 private stream:string;
	 
	assign_data(id:number , name:string , stream: string):void
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
 var stuobj=new Student ();
 stuobj.assign_data(1,"Padmini","ITT");
 stuobj.display();
 