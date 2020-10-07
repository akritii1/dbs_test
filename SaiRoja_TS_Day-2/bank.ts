interface BankInterface
{
	assign_data(acc_no:number,name:string,balance:number):void;
	display():void;
}
class Bank implements BankInterface
{
	private acc_no:number;
	private name:string;
	private balance:number;
	assign_data(acc_no:number,name:string,balance:number):void
	{
		this.acc_no= acc_no;
		this.name=name;
		this.balance=balance;
	}
	display():void
	{
		console.log("Account_number : "+this.acc_no);
		console.log("Name : "+this.name);
		console.log("Balance : "+this.balance);
	}
}
var bank_obj = new Bank();
bank_obj.assign_data(123,"Ram",5000000);
bank_obj.display();