class Employee2{
    private id:number;
    private name:string;
    private designation:string;
    private dept:string;
    constructor(id: number,name:string,designation:string,dept:string){
        this.id=id;
        this.name=name;
        this.designation=designation;
        this.dept=dept;
    }
    display():void{
        console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
     }
    }
    var obj=new Employee2(101,"Piyush","IT","Manager");
    obj.display();