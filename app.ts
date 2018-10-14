let myName;
myName = 23
myName = 'hello world'

const hobby: string[] = ['Hi', 'there']

function logMessage() :void {
  console.log('Hi there')
}

// function type
function multiply(val1:number, val2:number) :number {
  return val1 * val2
}

let myMultiple :(val1:number, val2:number) => number;
myMultiple = multiply;
console.log(myMultiple(1,2))

// union type
let myVar: string | number = 'Hi there'
myVar = 23

// strict null check
let canBeNull: number | null

// class
class Person {
  name:string = 'Vinh Le';
  job:string;
  private age:number;
  protected address:string;

  constructor(name:string, public username: string, age:number) {
    this.name = name
    this.age = age
  }

  printJob(job:string) {
    this.job = job
    console.log(this.job)
  }

  printAddress(address:string) {
    this.address = address
    console.log(this.address)
  }
}

const myPerson = new Person('Vinh', 'vinhlee95', 22);

// private var only accessible within original class
// could not be accessed in, for instance, extending class
class Address extends Person {
  // this will cause error
  printAge():void {
    // console.log(this.age)
  }
  constructor(hobby:string) {
    super('Vinh Le', 'vinhle95', 22)
    this.name = 'Vinh'
    this.username = 'vinhle95'
  }
}

const myAddress = new Address('vinhle')
console.log(myAddress)
