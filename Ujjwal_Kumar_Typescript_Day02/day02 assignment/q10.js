var Bank = /** @class */ (function () {
    function Bank(acct_no, name, balance) {
        this.acct_no = acct_no;
        this.name = name;
        this.balance = balance;
    }
    Bank.prototype.display = function () {
        console.log("Acct_no : " + this.acct_no + " name: " + this.name + " Balance : " + this.balance);
    };
    return Bank;
}());
var bankObj = new Bank(98, "Rakesh", 59000);
bankObj.display();
//console.log ("Private data : "+bankObj.acct_no);
