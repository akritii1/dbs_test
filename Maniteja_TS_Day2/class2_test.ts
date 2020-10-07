class myClass
{
    myData : number=30 ;  
  //constructor() { console.log ("This is constructor..");}  
   
   constructor(data : number) {this.myData = data;}  
  returnData() : number
  { return this.myData;}
}

//var myClassObj = new myClass;
//console.log ("Class data : " + myClassObj.returnData());
 var myClassObj1 = new myClass(20);
 console.log ("Class data : " + myClassObj1.returnData());
