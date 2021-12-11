//Variables: to declare and name.
// types: var, let , const

// var :reassigned and given a new value
// global
var name = 'Sammy'//string
var num = 300//number
var animals= ['cow', 'birds', 'fish']//array
var poem = { roses: 'red', violets: 'blue' }//object
var success = true//boolen
var nothing = null// other type undefined


//1-scope :Local , global
// Global variables are those declared outside of a block.
// Local variables are those declared inside of a block like function.


//expamle var
// Initialize a global variable
// var species = 'human'

// function transform() {
//   // Initialize a local, function-scoped variable
//   var species = 'animal'
//   console.log(species)
// }

// // Log the global and local variable
// console.log(species)
// transform()
// console.log(species)


// let and const are block-scoped: function ,if, for,and while
// var fullMoon = true

// // Initialize a global variable
// let species = 'human'

// if (fullMoon) {
//   // Initialize a block scoped variable
//   let species = 'animal'
//   console.log(`inside if ${species}.`)
// }

// console.log(`outside if ${species}.`)


// // Use var to initialize a variable
// var species2 = 'human'

// if (fullMoon) {
//   // Attempt to create a new variable in a block
//   var species2 = 'animal'
//   console.log(`inside if with var ${species2}.`)
// }

// console.log(`outside if with var ${species2}.`)


// 2-Hoisting

// // Attempt to use a variable before declaring it
// console.log(x)

// // Variable assignment
// var x = 100


// Attempt to use a variable before declaring it
// console.log(x)

// // Variable assignment without var
// x = 100


// Initialize x in the global scope
// var x = 100

// function hoist() {
//   // A condition that should not affect the outcome of the code
//   if (false) {
//     var x = 200
//   }
//   console.log(x)
// }

// hoist()//un


// Initialize x in the global scope
// let x = true

// function hoist() {
//   // Initialize x in the function scope
//   if (3 === 4) {
//     let x = false
//   }
//   console.log(x)
// }

// hoist()



// const 
// Assign value to const
// const SPECIES = 'human'

// // Attempt to reassign value
// SPECIES = 'werewolf'

// console.log(SPECIES)

// Create a CAR object with two properties
// const CAR = {
//     color: 'blue',
//     price: 15000,
//     method:()=>console.log(color,price)
//   }
  
//   // Modify a property of CAR
//   CAR.price = 20000
  
//   console.log(CAR)