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

export function removeFromStorage(projectObject) {
  let indexOfProject = storage.indexOf(projectObject)
  storage.splice(indexOfProject, 1)
  localStorage.setItem('storage', JSON.stringify(storage))
}