import project from './projects'
// import task from './tasks'

let storage = []
let names = []
let taskLists = []

export function getStorage() {
  let storageObjects = []

  for (let i = 0; i < storage.length; i++) {
    let currentObj = Object.assign(project(`${names[i]}`), storage[i])
    currentObj.addToTaskList(taskLists[i])
    storageObjects.push(currentObj)
  }
  return storageObjects
}

export function addToStorage(projectObject) {
  if (Array.isArray(projectObject)) {
    for (let i = 0; i < projectObject.length; i++) {
      storage.push(projectObject[i])
      names.push(projectObject.getProjectName()[i])
      taskLists.push(projectObject.getTaskList()[i])
    }
  } else {
    storage.push(projectObject)
    names.push(projectObject.getProjectName())
    taskLists.push(projectObject.getTaskList())
    // localStorage.setItem('storage', JSON.stringify(getStorage()))
    // localStorage.setItem('names', names)
    // localStorage.setItem('taskLists', taskLists)
  }
}
