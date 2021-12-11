// A JavaScript class is a type of function. Classes are declared with the class keyword

// Initializing a function with a function expression
const x = function () {}

// Initializing a class with a class expression
const y = class {}

console.log(Object.getPrototypeOf(x))//ƒ () { [native code] }
console.log(Object.getPrototypeOf(y))//ƒ () { [native code] }


// Initialize a constructor from a function
const constructorFromFunction = new x()

console.log(constructorFromFunction)

// Initialize a constructor from a class
const constructorFromClass = new y()

console.log(constructorFromClass)



// Initializing a class definition
class Hero {
    constructor(name, level) {
      this.name = name
      this.level = level
    }

     // Adding a method to the constructor
  greet() {
    return `${this.name} says hello.`
  }
  }

  const hero1 = new Hero('Varg', 1)

//   assigning the properties inside a constructor() method.

// Extending a Class

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
      // Chain constructor with super
      super(name, level)
  
      // Add a new property
      this.spell = spell
    }
  }

//   the super keyword is used in place of call to access the parent functions.
//  We will use extends to refer to the parent class.
const hero2 = new Mage('Lejon', 2, 'Magic Missile')
console.log(hero2)