class Student
{
  private id:number;
  private name:string;
  private stream : string;
  
  constructor(id:number, name:string, stream:string)
  {
     this.id= id;
	 this.name = name;
	 this.stream= stream;
  }
  
  public display():void
  {
    console.log ("ID : " + this.id + " name: "+this.name +" Stream : " + this.stream);
  }
  

}

var stdObj = new Student(897, "John Miller", "Chemical");
stdObj.display();

