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
myVar = false

// strict null check
let foo = 12
foo = null