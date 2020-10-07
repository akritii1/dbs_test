var glovar: number = 17;

class Clname
{
     lovar : number = 50;
     static stavar : number = 98;
   
      lodatafunc():number 
	{
	   var loval : number = 13;
	   return loval;
	}
	
}

var  myClassObj = new Clname();

console.log ("Global variable: "+glovar);

console.log ("Static variable: "+Clname.stavar);

console.log ("Class variable: "+  myClassObj.lovar);

console.log ("Local variable data: "+myClassObj.lodatafunc());
