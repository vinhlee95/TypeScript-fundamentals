interface IPersonType {
  name: string
  age?: number
  [propname: string]: any
}

function greetPerson(person: IPersonType) {
  console.log(`Hi ${person.name}. You are ${person.age}`)
}

const Person1 = {name: 'Vinh', age: 22, hobby: 'Gym'}
greetPerson(Person1)
function sayHobby(person: IPersonType) {
  console.log(`And I know you like ${person.hobby}`)
}
sayHobby(Person1) 

// INTERFACE IN CLASS
class PersonClass implements IPersonType {
  name:string = 'John'
  job: string
  constructor(job:string) {
    this.job = job
  }
}

const John = new PersonClass('student');
console.log(John.name, John.job)

// INTERFACE IN FUNCTION TYPE
interface IAlertFunc {
  // a function take name as arg and log sth
  (name:string) : void
}

let logName:IAlertFunc = function(name:string) {
  console.log(name)
}

logName('Vinh')

// strict null check
interface Foo {
  bar: string;
}
// this will not work 
// const fn = (foo?: Foo | undefined) => foo.bar;