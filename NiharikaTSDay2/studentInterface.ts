
interface IStudent
{
  assign_data(roll:number, name:string, course_code:number) : void;
  display():void;

}

class Student implements IStudent{

   private roll:number;
  private name:string;
  private course_code : number;
  
  assign_data(roll:number, name:string, course_code:number) : void
  {
     this.roll= roll;
	 this.name = name;
	 this.course_code= course_code;
  }
  
  display():void
    {console.log ("rollnumber : " + this.roll + "     name: "+ this.name + "    course_code : " + this.course_code);}

}

var stuObj = new Student();
stuObj.assign_data(100, "Niharika", 10);
stuObj.display();
