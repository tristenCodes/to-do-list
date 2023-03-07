const project = (name) => {
  // create a project

  // properties
  const projectName = name
  const taskList = [] // all tasks in this project will be stored here

  // functions

  const getProjectName = () => {
    return projectName
  }

  const getTaskList = () => {
    return taskList
  }

  const addToTaskList = (taskObj) => {
    taskList.push(taskObj)
  }

  const removeFromTaskList = (taskObj) => {
    if (taskList.indexOf(taskObj) !== undefined) {
      taskList.splice(taskList.indexOf, 1)
    }
  }

  return {
    getProjectName,
    getTaskList,
    addToTaskList,
    removeFromTaskList
  }
}

export default project
