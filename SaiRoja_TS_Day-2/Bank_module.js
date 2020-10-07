"use strict";
exports.__esModule = true;
var Bank = /** @class */ (function () {
    function Bank() {
    }
    Bank.prototype.assign_data = function (acc_no, name, balance) {
        this.acc_no = acc_no;
        this.name = name;
        this.balance = balance;
    };
    Bank.prototype.display = function () {
        console.log("Account_number : " + this.acc_no);
        console.log("Name : " + this.name);
        console.log("Balance : " + this.balance);
    };
    return Bank;
}());
var bank_obj = new Bank();
bank_obj.assign_data(123, "Ram", 5000000);
bank_obj.display();
