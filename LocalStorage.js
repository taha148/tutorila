// Web storage is data stored locally in a user's browser. There are two types of web storage:

// Local storage - data with no expiration date that will persist after the browser window is closed.
// Session storage - data that gets cleared after the browser window is closed.

// This is useful for saving data such as user preferences (light or dark color theme on a website), 
// remembering shopping cart items, or remembering a user is logged into a website.

// setItem()	Add key and value to local storage
// getItem()	Retrieve a value by the key
// removeItem()	Remove an item by key
// clear()	Clear all storage

localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()