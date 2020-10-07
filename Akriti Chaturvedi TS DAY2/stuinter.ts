interface IStu
{
  assign_data(roll:number, name:string, course_code:number) : void;
  display():void;

}

class Stu implements IStu{

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
    {console.log ("roll : " + this.roll + "     name: "+ this.name + "    course_code : " + this.course_code);}

}

var stuObj = new Stu();
stuObj.assign_data(101, "Akriti", 10);
stuObj.display();
