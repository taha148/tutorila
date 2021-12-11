// Destructuring, Rest Parameters, and Spread Syntax
// new features for working with arrays and objects have been made


// Destructuring assignment is a syntax that allows you to assign object 
// properties or array items as variables. 

const note = {
    id: 1,
    title: 'My first note',
    date: '01/01/1970',
    author: {
        firstName: 'Sherlock',
        lastName: 'Holmes',
      },
  }

  // Create variables from the Object properties
const id = note.id
const title = note.title
const date = note.date


// Destructure properties into variables
const {id, title, date, author: {firstName, lastName}} = note

// // Assign a custom name to a destructured value
// const {id: noteId, title, date} = note

// allows you to target your access to the properties you care about.
const {length} = 'A string'

//array
const date = ['1970', '12', '01']
// Create variables from the Array items
const year = date[0]
const month = date[1]
const day = date[2]

// // Destructure Array values into variables
// const [year, month, day] = date
// const [year, , day] = date



// //object entries
// // Using a for loop
// for (let [key, value] of Object.entries(note)) {
//     console.log(`${key}: ${value}`)
//   }


// /Spread
// Spread syntax (...) is another helpful addition to JavaScript for working with 
// arrays, objects, and function calls.

// Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools)

// Unpack the tools Array into the allTools Array
// const allTools = [...tools, ...otherTools]

// console.log(allTools)

// Array of users
const users = [
    {id: 1, name: 'Ben'},
    {id: 2, name: 'Leslie'},
  ]


  // A new user to be added
const newUser = {id: 3, name: 'Ron'}

users.push(newUser)

// const updatedUsers = [...users, newUser]

// console.log(users)
// console.log(updatedUsers)


//shollw copy
// Create an Array
const originalArray = ['one', 'two', 'three']

// Assign Array to another variable
const secondArray = originalArray

// Remove the last item of the second Array
secondArray.pop()

console.log(originalArray)


// // Create an Array
// const originalArray = ['one', 'two', 'three']

// // Use spread to make a shallow copy
// const secondArray = [...originalArray]

// // Remove the last item of the second Array
// secondArray.pop()

// console.log(originalArray)


// /object
// / Create an Object and a copied Object with Object.assign()
const originalObject = {enabled: true, darkMode: false}
const secondObject = Object.assign({}, originalObject)

// Create an object and a copied object with spread
// const secondObject = {...originalObject}

// console.log(secondObject)


const user = {
    id: 3,
    name: 'Ron',
    organization: {
      name: 'Parks & Recreation',
      city: 'Pawnee',
    },
  }

  const updatedUser = {...user, organization: {position: 'Director'}}

// console.log(updatedUser)

// user.organization.position = 'Director'

// const updatedUser = {
//     ...user,
//     organization: {
//       ...user.organization,
//       position: 'Director',
//     },
//   }
  
//   console.log(updatedUser)


// Spread with Function Calls

function multiply(a, b, c) {
    return a * b * c
  }

  multiply(1, 2, 3)

  const numbers = [1, 2, 3]

multiply(...numbers)

// Note: Without spread, this can be accomplished by using apply():

// multiply.apply(null, [1, 2, 3])


// Rest Parameters
// The syntax appears the same as spread (...) but has the opposite effect.
function restTest(...args) {
    console.log(args)
  }
  
  restTest(1, 2, 3, 4, 5, 6)

//   function restTest(one, two, ...args) {
//     console.log(one)
//     console.log(two)
//     console.log(args)
//   }
  
//   restTest(1, 2, 3, 4, 5, 6)

// const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']

// console.log(firstTool)
// console.log(rest)

// const {isLoggedIn, ...rest} = {id: 1, name: 'Ben', isLoggedIn: true}

// console.log(isLoggedIn)
// console.log(rest)