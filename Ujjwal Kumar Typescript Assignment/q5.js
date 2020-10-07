var glovar = 17;
var Clname = /** @class */ (function () {
    function Clname() {
        this.lovar = 50;
    }
    Clname.prototype.lodatafunc = function () {
        var loval = 13;
        return loval;
    };
    Clname.stavar = 98;
    return Clname;
}());
console.log("Global variable: " + glovar);
console.log("Static variable: " + Clname.stavar);
var myClassObj = new Clname();
console.log("Class variable: " + myClassObj.lovar);
console.log("Local variable data: " + myClassObj.lodatafunc());
