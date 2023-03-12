import Projects from './projects.js'
import Display from './displayController.js'
import task from './tasks.js'

const displayController = Display()
const inbox = Projects('Inbox')

inbox.addToTaskList(task('whatever', 'who cares', 'incomplete', new Date(), 'low'))


displayController.addToSideBar(inbox)
displayController.setProjectTitle(inbox.getProjectName())
displayController.loadTasks(inbox)
displayController.getProjectItems()

// for local storage to work, every project needs to be saved to a projectList whenever created


// ----------------------------------------------------