class myClass
{
  myData : number=98 ;
  
  constructor() { console.log ("Hello from constructor..");}
  
  returnData() : number
  { 
    console.log("Hello from returndata function.");  
    return this.myData;
  } 
}
var myClassObj = new myClass;
console.log ("Class data : " + myClassObj.returnData());
