import Projects from './projects.js'
import Task from './tasks.js'
import Display from './displayController.js'

const newProj = Projects('Big Project')
const newTask = Task()
const displayController = Display()

// Test, delete later ---------------------------------
newTask.name = 'Check the pantry'
newTask.notes = 'dont forget to check the cabinet too'
newTask.priority = 1
newProj.addToTaskList(newTask)

displayController.addToSideBar(newProj.getProjectName())
displayController.addToSideBar('Test')
console.log(displayController.getProjectItems())
// ----------------------------------------------------