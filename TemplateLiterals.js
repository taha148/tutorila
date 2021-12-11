// (ES6) added template literals to the JavaScript language.
//  Template literals are a new form of making strings in JavaScript 
// that add a lot of powerful new capabilities, such as creating multi-line 
// strings more easily and using placeholders to embed expressions in a string. 

const singleQuote = 'Every day is a good day when you code.'
const doubleQuote = "Every day is a good day when you code."

// Escaping a single quote in a single-quoted string
const single = '"We don\'t make mistakes. We just have happy accidents." - Bob Ross'

// Escaping a double quote in a double-quoted string
const double = "\"We don't make mistakes. We just have happy accidents.\" - Bob Ross"

console.log(single)
console.log(double)


// Template literals, on the other hand, are written by surrounding the string with the
//  backtick character, or grave accent (`):
const template = `"We don't make mistakes. We just have happy accidents." - Bob Ross`


// Multi-line Strings

const address1 = 'Mohammad' + 'Amman' + 'Jordan'
const address2 =
  'Mohammad\
  Amman\
  Jordan'

  const address3 = 'Mohammad\n' + 'Amman\n' + 'Jordan'
  const address4 = `Mohammad
Amman
Jordan`

  const address5 = `Mohammad
                 Amman
                 Jordan`

                 
console.log(address1)
console.log(address2)
console.log(address3)
console.log(address4)
console.log(address5)
//  Expression Interpolation

const method = 'concatenation'
const dynamicString = 'This string is using ' + method + '.'

const method2 = 'interpolation'
const dynamicString2 = `This string is using ${method2}.`

const sum = function(x, y) {
    return x + y
}
const x = 5
const y = 100
const string = `The sum of ${x} and ${y} is ${sum(x, y)}.`

console.log(string)

// Tagged Template Literals//advanced feature

function tag(strings, ...expressions) {
    console.log(strings)
    console.log(expressions)
  }

  const strings = tag`This is a string with ${true} and ${false} and ${100} interpolated inside.`


  const filePath = String.raw`C:\Development\profile\aboutme.html`;
  console.log(`The file was uploaded from: ${filePath}`);
