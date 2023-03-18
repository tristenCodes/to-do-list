import Projects from './projects.js'
import Display from './displayController.js'
import task from './tasks.js'
import { format } from 'date-fns'
import { getStorage, addToStorage } from './storage.js'

const displayController = Display()

const inbox = Projects('Inbox')
let projectStorage = JSON.parse(localStorage.getItem('storage'))
inbox.addToTaskList(task('Welcome to the inbox', 'this is a test description', 'incomplete', format(new Date(), 'P'), 'High'))




projectStorage.forEach((proj) => {
    displayController.addToSideBar(proj)
    displayController.setProjectTitle(proj.projectName)
    displayController.loadTasks(proj)
})