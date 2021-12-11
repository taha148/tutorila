
// for (initialization; condition; final expression) {
// 	// code to be executed
// }

// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
    // Print each iteration to the console
    console.log(i)
  }


//   Modifying an Array

// Initialize empty array
let arrayExample = []

// Initialize loop to run 3 times
for (let i = 0; i < 3; i++) {
  // Update array with variable value
  arrayExample.push(i)
  console.log(arrayExample)
}


// For...In Loop: statement iterates over the properties of an object. 


const shark = {
    species: 'great white',
    color: 'white',
    numberOfTeeth: Infinity,
  }


  // Print property names of object
for (attribute in shark) {
    console.log(attribute)
  }


  // Print property values of object
for (attribute in shark) {
    console.log(shark[attribute])
  }

//   For...Of Loop

// The for...in statement is useful for iterating over object properties, 
// but to iterate over iterable objects like arrays and strings, we can use the for...of 
// statement. The for...of statement is a newer feature as of ECMAScript 6.
//  ECMAScript (or ES) is a scripting-language specification created to standardize JavaScript.

// Initialize array of shark species
let sharks = ['great white', 'tiger', 'hammerhead']

// Print out each type of shark
for (let shark of sharks) {
  console.log(shark)
}


// Loop through both index and element
for (let [index, shark] of sharks.entries()) {
    console.log(index, shark)
  }


  // Assign string to a variable
let sharkString = 'sharks'

// Iterate through each index in the string
for (let shark of sharkString) {
  console.log(shark)
}