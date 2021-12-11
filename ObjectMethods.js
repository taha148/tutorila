// Object:An object in JavaScript is a data type,that is composed of a collection of 
// names or keys and values, represented in name:value pairs. The name:value pairs can consist of properties 
// that may contain any data type — including strings, numbers,
//  and Booleans — as well as methods, which are functions contained within an object.


// Creating an Object
// The object literal, which uses curly brackets: {}
// The object constructor, which uses the new keyword

// Initialize object literal with curly brackets
const objectLiteral = {}

// Initialize object constructor with new Object
const objectConstructor = new Object()

const gimli = {
    name: 'Gimli',
    race: 'dwarf',
    weapon: 'axe',
    greet: function () {
      return `Hi, my name is ${this.name}!`
    },
  }

//   Properties and Methods


// properties:name,race
//method:greet



// Accessing Object Properties

// Dot notation: .  gimli.weapon
// Bracket notation: [] gimli['weapon']

gimli.greet()


// Adding and Modifying Object Properties
// Add new age property to gimli
gimli.age = 139
// gimli['age'] = 139


// Add new fight method to gimli
gimli.fight = function () {
    return `Gimli attacks with an ${this.weapon}.`
  }

//   Removing Object Properties

// Remove weapon from gimli
delete gimli.weapon //return true

// Looping Through Object Properties

for (let key in gimli) {
    console.log(gimli[key])
  }

  // Initialize method on gimli object to return property keys
Object.keys(gimli)//["name", "race", "weapon"]




///new way 
// Object.create():is used to create a new object and link the prototype of an existing object.

// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
      const accepting = this.isAvailable
        ? 'is accepting applications'
        : 'is not currently accepting applications'
  
      console.log(
        `The ${this.position} position is ${this.type} and ${accepting}.`
      )
    },
  }
  
  // Use Object.create to pass properties
  const barista = Object.create(job)
  
  barista.position = 'barista'
  barista.showDetails()
  

//   Object.values()

// Object.entries()

// Object.assign()

// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry',
  }
  
  // Initialize another object
  const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express',
  }
  
  // Merge the objects
  const character = Object.assign(name, details)//{ ...name, ...details }
  
  console.log(character)