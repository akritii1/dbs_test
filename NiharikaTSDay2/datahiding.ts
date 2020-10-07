class Bank
{
  private acct_number:number;
  private name:string;
  private balance : number;
  
  constructor(acct_number:number, name:string, balance:number)
  {
     this.acct_number= acct_number;
	 this.name = name;
	 this.balance= balance;
  }
  
  display():void
  {
    console.log ("Acct_no : " + this.acct_number + " name: "+ " Balance : " + this.balance);
  }
  

}

var bankObj = new Bank(12, "Neha", 50000);
bankObj.display();
//console.log ("Private data : "+bankObj.acct_number);