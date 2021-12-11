// These allow developers to initialize a function with default values
//  if the arguments are not supplied to the function call.
//  Initializing function parameters in this way will make your functions easier to read and
//  less error-prone, 
// and will provide default behavior for your functions. 

// Define a function to cube a number
function cube(x) {
    return x * x * x
  }


//   function cube(x=5) {
//     if (typeof x === 'undefined') {
//       x = 5
//     }
  
//     return x * x * x
//   }

// Define a function to add two values
function sum(a = 1, b = 2) {
    return a + b
  }
  
  sum()