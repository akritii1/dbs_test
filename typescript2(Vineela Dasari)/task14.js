"use strict";
exports.__esModule = true;
var Studentimp = /** @class */ (function () {
    function Studentimp(id, name, stream) {
        this.id = id;
        this.name = name;
        this.stream = stream;
    }
    Studentimp.prototype.getId = function () {
        return this.id;
    };
    Studentimp.prototype.getName = function () {
        return this.name;
    };
    Studentimp.prototype.getStream = function () {
        return this.stream;
    };
    return Studentimp;
}());
var objstudent2 = new Studentimp(101, "Abhay", "CSE");
console.log("ID: " + objstudent2.getId());
console.log("Name: " + objstudent2.getName());
console.log("Stream: " + objstudent2.getStream());
