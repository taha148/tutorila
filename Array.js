// Creating an Array
// Initialize array of shark species with array constructor
let sharks = new Array('Hammerhead', 'Great White', 'Tiger')

// Initialize array of shark species with array literal
let sharks = ['Hammerhead', 'Great White', 'Tiger']

let seaCreatures = ['octopus', 'squid', 'shark', 'sea horse', 'starfish']
seaCreatures.length
seaCreatures.indexOf('sea horse')

// Accessing Items in an Array
seaCreatures[1]

const lastIndex = seaCreatures.length - 1

seaCreatures[lastIndex]


seaCreatures[5] = 'whale'


// Append lobster to the end of the seaCreatures array
seaCreatures.push('lobster')



// Append otter to the beginning of the seaCreatures array
seaCreatures.unshift('otter')


// Removing an Item from an Array
seaCreatures.splice(6, 1)

// In the splice() method, the first parameter stands for the index number to be removed, 
// and the second paremeter is how many items should be removed. We put 1, 
// signifying that only one item will be removed
let newArray = slice(6, 1)


// Remove the last item from the seaCreatures array
seaCreatures.pop()

// Remove the first item from the seaCreatures array
seaCreatures.shift()


// Modifying Items in Arrays
// Assign manatee to the first item in the seaCreatures array
seaCreatures[0] = 'manatee'
   

// Replace sea horse with sea lion using splice method
seaCreatures.splice(3, 1, 'sea lion')


// Looping Through an Array

// Create an array of shellfish species
let shellfish = ['oyster', 'shrimp', 'clam', 'mussel']

// Loop through the length of the array
for (let i = 0; i < shellfish.length; i++) {
  console.log(i, shellfish[i])
}

// Loop through each mammal
for (let item of shellfish) {
    console.log(item)
  }
