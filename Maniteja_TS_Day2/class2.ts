class myClass{
	myData: number=30;
	
	constructor(){
	console.log("this is a constructor");
	}
	
	returnData():number{
	return this.myData;
	}
}
	//var myClassObj = new myClass;
	//console.log("class data: "+ myClassObj.returnData());
	var myClassObj1 = new myClass(20);
	console.log("class data: "+ myClassObj1.returnData());
	