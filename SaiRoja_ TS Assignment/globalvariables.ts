var global_var : number = 20;
class Myclass{
	local_var : number = 50;
	static static_var : number = 60;
	local_data():number{
		var local_val : number=10;
		return local_val;
	}
}
console.log("global_var"+global_var);
console.log("static_var"+Myclass.static_var);
var obj = new Myclass();
console.log("class variable"+obj.local_var);
console.log("local variable data"+obj.local_data());
	