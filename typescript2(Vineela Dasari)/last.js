"use strict";
exports.__esModule = true;
var bankimp = /** @class */ (function () {
    function bankimp() {
    }
    bankimp.prototype.assign = function (accno, name, balance) {
        this.accno = accno;
        this.name = name;
        this.balance = balance;
    };
    bankimp.prototype.display = function () {
        console.log("ID: " + this.accno);
        console.log("Name: " + this.name);
        console.log("Balance: " + this.balance);
    };
    return bankimp;
}());
var bankobj = new bankimp();
bankobj.assign(1233000, "Siddhu", 200000);
bankobj.display();
