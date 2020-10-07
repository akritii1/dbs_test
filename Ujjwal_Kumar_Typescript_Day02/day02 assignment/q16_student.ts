import std=require("./q16_studentinterface")


class Student implements std.StudentInterface{

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
 