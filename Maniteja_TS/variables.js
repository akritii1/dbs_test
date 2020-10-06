var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
        return local_num;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("local num: " + obj.local_num);
