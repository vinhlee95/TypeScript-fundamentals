"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myName;
myName = 23;
myName = 'hello world';
var hobby = ['Hi', 'there'];
function logMessage() {
    console.log('Hi there');
}
// function type
function multiply(val1, val2) {
    return val1 * val2;
}
var myMultiple;
myMultiple = multiply;
console.log(myMultiple(1, 2));
// union type
var myVar = 'Hi there';
myVar = 23;
// strict null check
var canBeNull;
// class
var Person = /** @class */ (function () {
    function Person(name, username, age) {
        this.username = username;
        this.name = 'Vinh Le';
        this.name = name;
        this.age = age;
    }
    Person.prototype.printJob = function (job) {
        this.job = job;
        console.log(this.job);
    };
    Person.prototype.printAddress = function (address) {
        this.address = address;
        console.log(this.address);
    };
    return Person;
}());
var myPerson = new Person('Vinh', 'vinhlee95', 22);
// private var only accessible within original class
// could not be accessed in, for instance, extending class
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address(hobby) {
        var _this = _super.call(this, 'Vinh Le', 'vinhle95', 22) || this;
        _this.name = 'Vinh';
        _this.username = 'vinhle95';
        return _this;
    }
    // this will cause error
    Address.prototype.printAge = function () {
        // console.log(this.age)
    };
    return Address;
}(Person));
var myAddress = new Address('vinhle');
console.log(myAddress);
