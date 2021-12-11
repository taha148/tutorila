// the Event Loop, Callbacks, Promises, and Async/Await in JavaScript

// In the early days of the internet, websites often consisted of static data in an HTML page. 
// To handle these operations in JavaScript, a developer must use asynchronous programming techniques.
// action like requesting data from an API can take an indeterminate amount of time,
//  depending on the size of data being requested,
//  the speed of the network connection, and other factors.
//   If API calls were performed in a synchronous manner, the browser would not be able to handle any user input,
//  like scrolling or clicking a button, until that operation completes. This is known as blocking.

// The Event Loop
// This section will explain how JavaScript handles asynchronous code with the event loop. 
// will then explain the two elements of the event loop: the stack and the queue.

// Define three example functions sync
function first() {
    console.log(1)
  }
  
  function second() {
    // console.log(2)
    // async
    setTimeout(() => {
        console.log(2)
      }, 0)
  }
  
  function third() {
    console.log(3)
  }
  first()
  second()
  third()


// //   stack you can imagine it as an array with "Last in, first out" (LIFO)
// without sync
// Add first() to the stack, run first() which logs 1 to the console, remove first() from the stack.
// Add second() to the stack, run second() which logs 2 to the console, remove second() from the stack.
// Add third() to the stack, run third() which logs 3 to the console, remove third() from the stack.

// The second example with setTimout looks like this:

// Add first() to the stack, run first() which logs 1 to the console, remove first() from the stack.
// Add second() to the stack, run second().
// Add setTimeout() to the stack, run the setTimeout()
//  Web API which starts a timer and adds the anonymous function to the queue, remove setTimeout() from the stack.
// Remove second() from the stack.
// Add third() to the stack, run third() which logs 3 to the console, remove third() from the stack.
// The event loop checks the queue for any pending messages and finds the anonymous function from setTimeout(),
//  adds the function to the stack which logs 2 to the console, then removes it from the stack.


// Callback Functions:do not have special syntax; they are just a function that has been passed as an argument to another function

// A function
function fn() {
    console.log('Just a function')
  }
  
  // A function that takes another function as an argument
  function higherOrderFunction(callback) {
    // When you call a function that is passed as an argument, it is referred to as a callback
    callback()
  }



  // Define three functions
// function first() {
//     console.log(1)
//   }
  
//   function second(callback) {
//     setTimeout(() => {
//       console.log(2)
  
//       // Execute the callback function
//       callback()
//     }, 0)
//   }
  
//   function third() {
//     console.log(3)
//   }

//   first()
// second(third)

// Nested Callbacks and the Pyramid of Doom (callback hell)

function pyramidOfDoom() {
    setTimeout(() => {
      console.log(1)
      setTimeout(() => {
        console.log(2)
        setTimeout(() => {
          console.log(3)
        }, 500)
      }, 2000)
    }, 1000)
  }
  pyramidOfDoom()


//   Promises represents the completion of an asynchronous function. It is an object that might return a value in the future. 

// Initialize a promise
const promise = new Promise((resolve, reject) => {
    // resolve('We did it!')
    setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
})
promise.then((response) => {
    console.log(response)
  })
  // Pending - Initial state before being resolved or rejected
// Fulfilled - Successful operation, promise has resolved
// Rejected - Failed operation, promise has rejected


// Promises can also be chained to pass along data to more than one asynchronous operation
promise
  .then((firstResponse) => {
    // Return a new value for the next then
    return firstResponse + ' And chaining!'
  })
  .then((secondResponse) => {
    console.log(secondResponse)
  })


//   Error Handling


function getUsers(onSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Handle resolve and reject in the asynchronous API
        if (onSuccess) {
          resolve([
            { id: 1, name: 'Jerry' },
            { id: 2, name: 'Elaine' },
            { id: 3, name: 'George' },
          ])
        } else {
          reject('Failed to fetch data!')
        }
      }, 1000)
    })
  }


//   getUsers(true)
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// Using the Fetch API with Promises

// Fetch a user from the GitHub API
fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })


//   Async Functions with async/await


// Handle fetch with async/await
async function getUser() {
    const response = await fetch('https://api.github.com/users/octocat')
    const data = await response.json()
  
    console.log(data)

//       try {
//     // Handle success in try
//     const response = await fetch('https://api.github.com/users/octocatxxxxx')
//     const data = await response.json()

//     console.log(data)
//   } catch (error) {
//       debugger
//     // Handle error in catch
//     console.error(error)
//   }
  }

// 
  
  // Execute async function
  getUser()