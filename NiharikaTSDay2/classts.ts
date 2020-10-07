class myClass
{
    myData : number=30 ;
  
  constructor() { console.log ("This is constructor..");}
  
  returnData() : number
  { return this.myData;} 

var myClassObj = new myClass;
console.log ("Class data : " + myClassObj.returnData());
}