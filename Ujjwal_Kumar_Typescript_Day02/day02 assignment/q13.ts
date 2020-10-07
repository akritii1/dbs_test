interface StudentInterface
{
  assign_data(id:number, name:string, stream:string) : void;
  display():void;

}

class Student implements StudentInterface{

   private id:number;
  private name:string;
  private stream:string;;
  
  assign_data(id:number, name:string, stream:string) : void
  {
     this.id=id;
	 this.name = name;
	 this.stream=stream;
  }
  
  display():void
    {console.log ("ID : " + this.id + "     Name: "+ this.name + "    Stream : " + this.stream);}

}

var stdObj = new Student();
stdObj.assign_data(87, "Swapnil", "Computer Science");
stdObj.display();
