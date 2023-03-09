import Projects from './projects.js'
import Task from './tasks.js'
import Display from './displayController.js'

const newProj = Projects('Project 1')
const anotherProj = Projects('Project 2')
const task1 = Task('Test Task 1', 'this is a description', 'completed', new Date(2017, 12-1, 24), 2, 'testerrrrr')
const task2 = Task('Test Task 2', 'this is a description also', 'completed', new Date(2015, 3-1, 14), 2, 'testerrrrr')
const displayController = Display()


newProj.addToTaskList(task1, task2)
anotherProj.addToTaskList(task1)

displayController.addToSideBar(newProj)
displayController.addToSideBar(anotherProj)

// ----------------------------------------------------