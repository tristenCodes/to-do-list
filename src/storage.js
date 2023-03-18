import project from './projects'
// import task from './tasks'

export let storage = []
// export let taskStorage = []

export function getStorage() {
  return storage
}

export function addToStorage(projectObject) {

  storage.push(projectObject)
  // taskStorage.push(projectObject.taskList)
  // localStorage.setItem('taskStorage', JSON.stringify(taskStorage))
  localStorage.setItem('storage', JSON.stringify(storage))
  console.log(JSON.parse(localStorage.getItem('storage')))

}
