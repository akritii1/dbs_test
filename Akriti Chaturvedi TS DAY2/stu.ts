class myClass
{
    private id : number=30 ;
    private name : string ="Akriti Chaturvedi";
    private dept : string ="IT";
  //constructor() { console.log ("This is constructor..");}  
   
   constructor(id:number,name:string,dept:string) {id = this.id;
                name=this.name;
                dept=this.dept;} 
    display(){
        console.log ("ID : " + this.id);
        console.log ("Name : " + this.name);
        console.log ("Dept : " + this.dept);

    }
  }

//var myClassObj = new myClass;
//console.log ("Class data : " + myClassObj.returnData());
 var myClassObj1 = new myClass(1,"Akr","it");
 myClassObj1.display();
 