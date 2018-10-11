"use strict";
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
