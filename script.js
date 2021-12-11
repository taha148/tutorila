import { sum, difference, product, quotient } from './function.js'
import {
    sum as add,
    difference as subtract
  } from './function.js'

  import * as mathFunctions from './function.js'
const x = 10
const y = 5

document.getElementById('x').textContent = x
document.getElementById('y').textContent = y

document.getElementById('addition').textContent = sum(x, y)
document.getElementById('subtraction').textContent = difference(x, y)
document.getElementById('multiplication').textContent = product(x, y)
document.getElementById('division').textContent = quotient(x, y)


// Polluting the global namespace: All the variables you created in your scripts—sum, difference, etc.—now exist on the window object.
//  If you attempted to use another variable called sum in another file, it would become difficult to know which value would be used 
// at any point in the scripts, since they would all be using the same window.sum variable.
// Dependency management: Scripts would have to be loaded in order from top to bottom to ensure the correct variables were available. 
// Saving the scripts as different files gives the illusion of separation,
//  but it is essentially the same as having a single inline <script> in the browser page.


// Native JavaScript Modules
// Modules in JavaScript use the import and export keywords:

// import: Used to read code exported from another module.
// export: Used to provide code to other modules.


// Modules are different from regular scripts in a few ways:

// Modules do not add anything to the global (window) scope.
// Modules always are in strict mode.
// Loading the same module twice in the same file will have no effect, as modules are only executed once/
// Modules require a server environment.