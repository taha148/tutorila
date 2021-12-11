// Every object in JavaScript has an internal property called [[Prototype]].
//  We can demonstrate this by creating a new, empty object.
let x = {} //or let x = new Object().

console.log(x,Object.getPrototypeOf(x))

//The double square brackets that enclose [[Prototype]] signify that it is an internal property,
//  and cannot be accessed directly in code.
Object.getPrototypeOf(x)


// Prototype Inheritance:
// When you attempt to access a property or method of an object,
//  JavaScript will first search on the object itself, and if it is not found,
//  it will search the object's [[Prototype]].

console.log("x.toString()",x.toString())


// Constructor Functions:
// are functions that are used to construct new objects.
// The new operator is used to create new instances based off a constructor function. 
// such as new Array() and new Date(),

//example game:A user can select a character and then choose what character 
// class they will have, such as warrior, healer, thief.

// / Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name
  this.level = level
}

let hero1 = new Hero('Bjorn', 1)

console.log(hero1,"hero1",Object.getPrototypeOf(hero1))

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
    return `${this.name} says hello.`
  }
  hero1.greet()


  // Initialize Warrior constructor
function Warrior(name, level, weapon) {
    // Chain constructor with call
    Hero.call(this, name, level)
  
    // Add a new property
    this.weapon = weapon
  }
  
  // Initialize Healer constructor
  function Healer(name, level, spell) {
    Hero.call(this, name, level)
  
    this.spell = spell
  }


  Warrior.prototype.attack = function () {
    //   debugger
    return `${this.name} attacks with the ${this.weapon}.`
  }
  
  Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}.`
  }

const hero12 = new Warrior('Bjorn', 1, 'axe')
const hero2 = new Healer('Kanin', 1, 'cure')

hero12.attack()


hero12.greet()
// Prototype properties and methods are not
//  automatically linked when you use call() to chain constructors. 
Warrior.prototype = Object.create(Hero.prototype)
Healer.prototype = Object.create(Hero.prototype)

