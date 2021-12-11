// High quality and low price are true
const highQuality = true
const lowPrice = true

highQuality && lowPrice

//or ||
highQuality || lowPrice

// NOT !
!highQuality

// if Statement

if (condition) {
    // code that will execute if condition is true
  }


  // Set balance and price of item
const balance = 500
const jeans = 40

// Check if there is enough funds to purchase item
if (jeans <= balance) {
  console.log('You have enough money to purchase the item!')
}


// else Statement

// if (condition) {
//     // code that will execute if condition is true
//   } else {
//     // code that will execute if condition is false
//   }


  // Set balance and price of item
const balance = 500
const phone = 600

// Check if there is enough funds to purchase item
if (phone <= balance) {
  console.log('You have enough money to purchase the item!')
} else {
  console.log(
    'You do not have enough money in your account to purchase this item.'
  )
}

// else if Statement

// if (condition a) {
// 	// code that will execute if condition a is true
// } else if (condition b) {
// 	// code that will execute if condition b is true
// } else if (condition c) {
// 	// code that will execute if condition c is true
// } else {
// 	// code that will execute if condition is false
// }


// Set the current grade of the student
let grade = 87

// Check if it is an A, B, C, D, or failing grade
if (grade >= 90) {
  console.log('A')
} else if (grade >= 80) {
  console.log('B')
} else if (grade >= 70) {
  console.log('C')
} else if (grade >= 60) {
  console.log('D')
} else {
  console.log('F')
}

// Ternary Operator

// (condition) ? expression on true : expression on false

let age = 20

// Place result of ternary operation in a variable
const oldEnough =
  age >= 21 ? 'You may enter.' : 'Sorry, you are not old enough to enter.'

// Print output
oldEnough