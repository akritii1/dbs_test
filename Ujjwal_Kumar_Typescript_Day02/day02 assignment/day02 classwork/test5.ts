class Myclass
{
    myData : number=98 ;   
   
   constructor(data : number) {this.myData = data;}  
  returnData() : number
  { return this.myData;}
}
 var myClassObj1 = new Myclass (98);
 console.log ("Class data : " + myClassObj1.returnData());
