"use strict";
function greetPerson(person) {
    console.log("Hi " + person.name + ". You are " + person.age);
}
var Person1 = { name: 'Vinh', age: 22, hobby: 'Gym' };
greetPerson(Person1);
function sayHobby(person) {
    console.log("And I know you like " + person.hobby);
}
sayHobby(Person1);
// INTERFACE IN CLASS
var PersonClass = /** @class */ (function () {
    function PersonClass(job) {
        this.name = 'John';
        this.job = job;
    }
    return PersonClass;
}());
var John = new PersonClass('student');
console.log(John.name, John.job);
var logName = function (name) {
    console.log(name);
};
logName('Vinh');
// this will not work 
// const fn = (foo?: Foo | undefined) => foo.bar;
