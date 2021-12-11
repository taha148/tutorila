// The (ES6) added arrow function expressions to the JavaScript language. 
// Arrow functions are a new way to write anonymous function expressions.
//features
// The biggest functional differences are that arrow functions do not have their 
// own 1-this  2-binding or 3-prototype and cannot be used as a 4-constructor. 
sum(1, 2)

function sum(a, b) {
    return a + b
  }

  const sumarrow = (a, b) => {
    return a + b
  }

//   Lexical this
  const printNumbers = {
    phrase: 'The current value is:',
    numbers: [1, 2, 3, 4],
  
    loop() {
      this.numbers.forEach(function (number) {
        console.log(this.phrase, number)
      })
    },
  }

  printNumbers.loop()


//   Arrow Functions as Object Methods
// const printNumbersObject = {
//     phrase: 'The current value is:',
//     numbers: [1, 2, 3, 4],
  
//     loop: () => {
//       this.numbers.forEach((number) => {
//         console.log(this.phrase, number)
//       })
//     },
//   }
//   printNumbersObject.loop()


//   Arrow Functions Have No constructor or prototype

function myFunction() {
    this.value = 5
  }
  
  // Log the prototype property of myFunction
  console.log(myFunction.prototype)
// output:  {constructor: ƒ}
// This shows that in the prototype property there is an object with a constructor. 
// This allows you to use the new keyword to create an instance of the function:
const instance = new myFunction()

console.log(instance.value)


//arrow function
const myArrowFunction = () => {}

// Attempt to log the prototype property of myArrowFunction
console.log(myArrowFunction.prototype)


// Attempt to log the prototype property of myArrowFunction instance
const arrowInstance = new myArrowFunction()

console.log(arrowInstance)


//Implicit Return
// const sum = (a, b) => a + b



const button = document.createElement('button')
button.textContent = 'Click me'
document.body.append(button)

class Display {
  constructor() {
    this.buttonText = 'New text'

    button.addEventListener('click', (event) => {
      event.target.textContent = this.buttonText
    })
  }
}

new Display()