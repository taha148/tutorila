// ES6 introduced a new way of working with functions and iterators in the form of Generators 
// (or generator functions). A generator is a function that can stop midway and then continue
//  from where it stopped. In short,
//  a generator appears to be a function but it behaves like an iterator.

function normalFunc() {
    console.log('I')
    console.log('cannot')
    console.log('be')
    console.log('stopped.')
  }

  function * generatorFunction() { // Line 1
    console.log('This will be executed first.');
    yield 'Hello, ';   // Line 2
    console.log('I will be printed after the pause');  
    yield 'World!';
  }
  const generatorObject = generatorFunction(); // Line 3
  console.log(generatorObject.next().value); // Line 4
  console.log(generatorObject.next().value); // Line 5
  console.log(generatorObject.next().value); // Line 6
  // This will be executed first.
  // Hello, 
  // I will be printed after the pause
  // World!
  // undefined


  //cases
//   Better Async functionality
// let url='https://jsonplaceholder.typicode.com/todos/1'
// Define a function named asyncAlt that takes a generator function as an argument
function asyncAlt(generatorFunction) {
    // Return a function
    return function () {
      // Create and assign the generator object
      const generator = generatorFunction()
  
      // Define a function that accepts the next iteration of the generator
      function resolve(next) {
        // If the generator is closed and there are no more values to yield,
        // resolve the last value
        if (next.done) {
          return Promise.resolve(next.value)
        }
  
        // If there are still values to yield, they are promises and
        // must be resolved.
        return Promise.resolve(next.value).then((response) => {
          return resolve(generator.next(response))
        })
      }
  
      // Begin resolving promises
      return resolve(generator.next())
    }
  }
const fetchJson = asyncAlt(function * (url) {
    try {
        let request = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
        let text = yield request.text();
        return JSON.parse(text);
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
})
fetchJson('https://jsonplaceholder.typicode.com/todos/1').then((response) => console.log(response))