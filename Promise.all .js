// Let's say I have an API call that returns all the users from a database and takes some amount of time to complete.

// First promise returns an array after a delay
const getUsers = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(
        () => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]),
        600
      )
    })
  }


  // Second promise relies on the result of first promise
const getIdFromUser = (user) => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => resolve(user.id), 500)
    })
  }


  // Third promise relies on the result of the second promise
const capitalizeIds = (id) => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => resolve(id.toUpperCase()), 200)
    })
  }




  const runAsyncFunctions = async () => {
    const users = await getUsers()
  
    for (let user of users) {
      const userId = await getIdFromUser(user)
      console.log(userId)
  
      const capitalizedId = await capitalizeIds(userId)
      console.log(capitalizedId)
    }
  
    console.log(users)
  }
  
runAsyncFunctions()



  const runAsyncFunctions2 = async () => {
    const users = await getUsers()
  
    Promise.all(
      users.map(async (user) => {
        const userId = await getIdFromUser(user)
        console.log(userId)
  
        const capitalizedId = await capitalizeIds(userId)
        console.log(capitalizedId)
      })
    )
  
    console.log(users)
  }
  runAsyncFunctions2()
