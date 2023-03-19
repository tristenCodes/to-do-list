import project from './projects'
// import task from './tasks'

export let storage = []
// export let taskStorage = []

export function getStorage() {
  return storage
}

export function addToStorage(projectObject) {

  storage.push(projectObject)
  localStorage.setItem('storage', JSON.stringify(storage))
}
