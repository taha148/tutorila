// this is a reference to an object.
// The object that this refers to can vary, implicitly based on whether it is global,
//  on an object, or in a constructor, and can also vary 
// explicitly based on usage of the Function prototype methods bind, call, and apply.

// Implicit Context
// the global context
// as a method within an object
// as a constructor on a function or class
// as a DOM event handler

//1-global===window
console.log(this)

function printThis() {
    console.log(this)
  }
  
  printThis()


//2-An Object Method

const details = {
    name: 'Mohmmad',
    yearBorn: 1996,
  
    describe() {
      console.log(`${this.name} was founded in ${this.yearBorn}.`)
    },
  }
  
  details.describe()

  //example two
  const details2 = {
    name: 'mohmmad',
    born: 1996,
    details: {
      father: 'ahmad',
      family: 'eagle',
      printDetails() {
        console.log(
          `The father is  ${this.father} and the family is ${this.family}.`
        )
      },
    },
  }
  
  details2.details.printDetails()

//   A Function Constructor

// When you use the new keyword, it creates an instance of a constructor function or class. 
// Function constructors were the standard way to initialize a 
// user-defined object before the class syntax was introduced in the ECMAScript 2015 .

// function Name(name, born) {
//     this.name = name
//     this.born = born
  
//     this.describe = function () {
//       console.log(`${this.name} was born in ${this.born}.`)
//     }
//   }
  
//   const nameInstance = new Name('Mohammad', 1996)
  
//   nameInstance.describe()

//   A Class Constructor
// A constructor on a class acts the same as a constructor on a function. 
class Name {
    constructor(name, born) {
      this.name = name
      this.born = born
    }
  
    describe() {
      console.log(`${this.name} was born in ${this.born}.`)
    }
  }
  
  const nameClass = new Name('mohammmad', 1996)
  
  nameClass.describe()

//   A DOM Event Handler

const button = document.createElement('button')
button.textContent = 'Click me'
document.body.append(button)

button.addEventListener('click', function (event) {
  console.log(this)
})

// Explicit Context
// In all of the previous examples, the value of this was determined by its context—whether
//  it is global, in an object, in a constructed function or class, or on a DOM event handler. 
// However, using call, apply, or bind, you can explicitly determine what this should refer to.

// bind can be particularly helpful when you want to use events to access properties of one class within another class.

// call and apply are very similar—they invoke a 
// function with a specified this context, and optional arguments.
//  The only difference between call and apply is that call requires 
//  the arguments to be passed in one-by-one, and apply takes the arguments as an array.

const book = {
    title: 'Brave New World',
    author: 'Aldous Huxley',
  }
  
  function summary() {
    console.log(`${this.title} was written by ${this.author}.`)
  }
  
//   summary()
///same becuse we sent object book
//   summary.call(book)
// // or:
// summary.apply(book)

function longerSummary(genre, year) {
    console.log(
      `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
    )
  }

  longerSummary.call(book, 'dystopian', 1932)
  longerSummary.apply(book, ['dystopian', 1932])

  const braveNewWorldSummary = summary.bind(book)

braveNewWorldSummary()


const book2 = {
    title: '1984',
    author: 'George Orwell',
  }
  //will not change 
  braveNewWorldSummary.bind(book2)
  
  braveNewWorldSummary() 