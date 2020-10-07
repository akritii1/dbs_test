class Student
{
  private ID:number;
  private Name:string;
  private Stream : string;
  
  constructor(ID:number, Name:string, Stream:string)
  {
     this.ID = ID;
	 this.Name = Name;
	 this.Stream=Stream;
  }
  
  public display():void
  {
    console.log ("ID : " + this.ID + " name: "+ " Name : " + this.Name + " Stream : " +this.Stream);
  }
  

}

var Obj = new Student(12, "Neha","CSE");
Obj.display();