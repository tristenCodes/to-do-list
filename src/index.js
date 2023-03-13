import Projects from './projects.js'
import Task from './tasks.js'
import Display from './displayController.js'
import task from './tasks.js'


const displayController = Display()
const inbox = Projects('Inbox')

displayController.addToSideBar(inbox)

// ----------------------------------------------------