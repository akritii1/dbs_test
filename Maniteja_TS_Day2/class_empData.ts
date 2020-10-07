class empData
{
     id : number;
	 name: string;
	 dept: string;
	 designation: string;
  //constructor() { console.log ("This is constructor..");}  
   
   constructor(id:number,name:string,dept:string,designation:string) {
	   this.id=id;
	   this.name=name;
	   this.dept=dept;
	   this.designation=designation;
	}  
  
  displayData():void{
   console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
}
}

//var myClassObj = new myClass;
//console.log ("Class data : " + myClassObj.returnData());
 var myClassObj1 = new empData (101,"Raven","Marketing","VP");
 myClassObj1.displayData();
