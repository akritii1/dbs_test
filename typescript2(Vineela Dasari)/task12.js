var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.data = function (acct_no, name, balance) {
        this.accno = acct_no;
        this.name = name;
        this.balance = balance;
    };
    Bank.prototype.getId = function () {
        return this.accno;
    };
    Bank.prototype.getName = function () {
        return this.name;
    };
    Bank.prototype.getBalance = function () {
        return this.balance;
    };
    return Bank;
}());
var objbank = new Bank();
objbank.data(100000333444, "Abhay", 1000000);
console.log("ID: " + objbank.getId());
console.log("Name: " + objbank.getName());
console.log("Balance: " + objbank.getBalance());
