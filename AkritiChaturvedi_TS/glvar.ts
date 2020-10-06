var global_Var: number = 20;

class MyClass
{
     local_var : number = 50;
     static static_var : number = 60;
   
      local_data():number 
	{
	   var local_val : number = 10;
	   return local_val;
	}
	
}

console.log ("Global variable: "+global_Var);
console.log ("Static variable: "+MyClass.static_var);
var  myClassObj = new MyClass();
console.log ("Class variable: "+  myClassObj.local_var);

console.log ("Local variable data: "+myClassObj.local_data());
