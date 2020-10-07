var Bank = /** @class */ (function () {
    function Bank(acct_number, name, balance) {
        this.acct_number = acct_number;
        this.name = name;
        this.balance = balance;
    }
    Bank.prototype.display = function () {
        console.log("Acct_no : " + this.acct_number + " name: " + " Balance : " + this.balance);
    };
    return Bank;
}());
var bankObj = new Bank(12, "Neha", 50000);
bankObj.display();
//console.log ("Private data : "+bankObj.acct_number);
