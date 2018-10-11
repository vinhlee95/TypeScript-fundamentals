"use strict";
var bankAccount = {
    money: 1000,
    // deposit does not return anything => void type
    deposit: function (value) {
        this.money += value;
    }
};
var myInfo = {
    name: "Vinh",
    bankAccount: bankAccount,
    hobbies: ['Sport', 'Coding']
};
myInfo.bankAccount.deposit(2000);
