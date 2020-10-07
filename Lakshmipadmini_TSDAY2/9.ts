 /*Write a typescript to demonstrate inheritance.
 Have a baseclass as Employee, and derived classes as regular_employee 
 and contract_employee.  Regular employee works on per month package
 and contact_employee works on a contract basis and is paid per hr. 
 Decide the desired fields accordinly in each of the class and also
 demostrate method overriding.*/
 
 

    
class Employee
{
  id: number;
  name: string;
  dept:string;
  designation : string;
  
  display(): void
  {
     console.log ("ID: " + this.id + "    Name : "+this.name + "    Dept : "+ this.dept + "    Designation : "+this.designation);
  } 
}
class regular_employee extends Employee
{
   salary : number;
   
   constructor (id:number, name : string, dept: string, designation : string, salary: number)
   {  
     super();   
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.designation = designation;
    this.salary = salary;
   }
   
   display(): void
   {
      super.display();
      console.log ("Salary : " + this.salary);
   }
}


class contract_employee extends Employee
{
   salary : number;
   hours : number;
   
   constructor (id:number, name : string, dept: string, designation : string, salary: number, hours: number)
   {  
     super();   
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.designation = designation;
    this.salary = salary;
    this.hours = hours;
   }
   
   display(): void
   {
      super.display();
      var sal = this.salary*this.hours;
      console.log ("Salary : " + sal);
   }
}



var regular_employeeObj = new regular_employee(1, "Padmini", "IT" , "Project Manager", 500000);


regular_employeeObj.display();


var contract_employeeObj = new contract_employee(102, "Padmini V", "ITT" , "Developer", 5000,12);


contract_employeeObj.display();
 








