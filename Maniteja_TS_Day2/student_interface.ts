interface student_infer{
	add_data(roll_no:number,name:string,stream:string,year:number):void;
	displayData():void;
	}
	
class student implements student_infer{
	private roll_no:number;
	private name:string;
	private stream:string;
	private year:number;
	
	add_data(roll_no:number,name:string,stream:string,year:number):void{
		this.roll_no=roll_no;
		this.name=name;
		this.stream=stream;
		this.year=year;
	}
	displayData():void{
		console.log("Name is: "+ this.name + ", whose roll number is "+ this.roll_no 
		+ " studying in " + this.year + " year " + this.stream + " branch.");
	}
}

var student_obj = new student();
student_obj.add_data(101,"John","CS",2);
student_obj.displayData();