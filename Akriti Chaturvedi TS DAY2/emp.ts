class myClass
{
    id : number=30 ;
    name : string ="Akriti Chaturvedi";
    dept : string ="IT";
  //constructor() { console.log ("This is constructor..");}  
   
   constructor(id:number,name:string,dept:string) {id = this.id;
                name=this.name;
                dept=this.dept;}  
  returnID() : number
  { return this.id;}
  returnNAME():string{
      return this.name;
  }
  returnDept():string{
      return this.dept;
  }
}

//var myClassObj = new myClass;
//console.log ("Class data : " + myClassObj.returnData());
 var myClassObj1 = new myClass(1,"Akr","it");
 console.log ("ID : " + myClassObj1.returnID());
 console.log ("Name : " + myClassObj1.returnNAME());
 console.log ("Dept : " + myClassObj1.returnDept());
