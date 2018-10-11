type bankAccountType = {money: number, deposit: (value:number) => void}

let bankAccount: bankAccountType = {
  money: 1000,
  // deposit does not return anything => void type
  deposit(value) {
    this.money += value
  }
}

type infoType = {
  name: string,
  bankAccount: bankAccountType,
  hobbies: string[]
}

let myInfo: infoType = {
  name: "Vinh",
  bankAccount,
  hobbies: ['Sport', 'Coding']
}

myInfo.bankAccount.deposit(2000)