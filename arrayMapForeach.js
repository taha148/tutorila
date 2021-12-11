// forEach():The forEach() method calls a function for each element in an array.
let fish = ['piranha', 'barracuda', 'cod', 'eel']

// Print out each item in the array
fish.forEach((individualFish) => {
    console.log(individualFish)
  })

  // Loop through the length of the array
for (let i = 0; i < fish.length; i++) {
    console.log(fish[i])
  }

//   map()
// The map() method creates a new array with the results of a function call on each element in the array.
// let fish = ['piranha', 'barracuda', 'cod', 'eel']

// Print out each item in the array
let printFish = fish.map((individualFish) => {
  console.log(individualFish)
})

printFish


// Pluralize all items in the fish array
let pluralFish = fish.map((individualFish) => {
    return `${individualFish}s`
  })
  
  pluralFish



//   filter()
// The filter() method creates a new array with the elements that pass the result of a given test.

let seaCreatures = ['shark', 'whale', 'squid', 'starfish', 'narwhal']

// Filter all creatures that start with "s" into a new list
let filteredList = seaCreatures.filter((creature) => {
  return creature[0] === 's'
})

filteredList

// reduce()
// The reduce() method will reduce an array to a single value.

let numbers = [42, 23, 16, 15, 4, 8]

// Get the sum of all numerical values
let sum = numbers.reduce((a, b) => {
  return a + b
})

sum

