export const loadState = () => {
  try {
    console.log('loading local state')
    const serializedState = localStorage.getItem('state')
    const localUser = localStorage.getItem('loggedAppUser')
    console.log(localUser)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    console.log('saving local state')
    const serializedState = JSON.stringify(state)
    localStorage.insertItem('state', serializedState)
    console.log(serializedState)
  } catch (err) {
    // ignore
  }
}
