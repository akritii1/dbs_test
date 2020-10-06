var global_num = 12         
class Numbers { 
   num_val = 13;            
   static sval = 10;        
   
   storeNum() { 
      var local_num = 14;   
	  return local_num;
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   
var obj = new Numbers(); 
console.log("local num: "+obj.local_num) 