import Projects from './projects.js'
import Display from './displayController.js'
import task from './tasks.js'
import { format } from 'date-fns'
import { getStorage, addToStorage } from './storage.js'

const displayController = Display()


if (localStorage.getItem('storage') === null) {
  const inbox = Projects('Inbox')
  inbox.addToTaskList(
    task(
      'Welcome to the inbox',
      'this is a test description',
      'incomplete',
      format(new Date(), 'P'),
      'High'
    )
  )
  displayController.addToSideBar(inbox)
  displayController.setProjectTitle(inbox.projectName)
  displayController.loadTasks(inbox)
} else {
  let projectStorage = JSON.parse(localStorage.getItem('storage'))

  projectStorage.forEach((proj) => {
    displayController.addToSideBar(proj)
    displayController.setProjectTitle(proj.projectName)
    displayController.loadTasks(proj)
  })
}