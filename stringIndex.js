// Initializing a new string primitive
const stringPrimitive = 'A new string.'

// Initializing a new String object
const stringObject = new String('A new string.')

typeof stringPrimitive

typeof stringObject

'How are you?'

'How are you?'[5]

'How are you?'.charAt(5)

'How are you?'.indexOf('o')

'How are you?'.slice(8, 11)

'How are you?'.slice(8)

'How are you?'.length

'How are you?'.toUpperCase()

'How are you?'.toLowerCase()


const originalString = 'How are you?'

// Split string by whitespace character
const splitString = originalString.split(' ')

console.log(splitString)



const tooMuchWhitespace = '     How are you?     '

const trimmed = tooMuchWhitespace.trim()

console.log(trimmed)



const originalString = 'How are you?'

// Replace the first instance of "How" with "Where"
const newString = originalString.replace('How', 'Where')

console.log(newString)