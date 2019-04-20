import { debounce } from 'lodash'

const localStorageAvailable = () => {
  const test = 'test'
  try {
    window.localStorage.setItem(test, test)
    window.localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}

const debouncedUpdate = debounce((state) => {
  window.localStorage.setItem('app', JSON.stringify(state))
}, 200)

const setupLocalStorage = (store) => {
  const previous = window.localStorage.getItem('app')
  if (previous) {
    store.replaceState(JSON.parse(previous))
  }
}

const VuexLocalStorage = (store) => {
  if (!localStorageAvailable()) {
    return false
  }

  setupLocalStorage(store)

  store.subscribe((mutation, state) => {
    debouncedUpdate(state)
  })
}

export default VuexLocalStorage
