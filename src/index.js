import Projects from './projects.js'
import Display from './displayController.js'
import task from './tasks.js'
import { format } from 'date-fns'
import { getStorage, addToStorage } from './storage.js'

const displayController = Display()

const inbox = Projects('Inbox')
inbox.addToTaskList(task('Welcome to the inbox', 'this is a test description', 'incomplete', format(new Date(), 'P'), 'High'))
addToStorage(inbox)
// -------------------------------------------------------------------------------------
const testArray = []                // create a new array

testArray.push(inbox)               // push objects in to the new array

const newTestArray = JSON.stringify(testArray)          // create a new obj = JSON.stringify of the array

localStorage.setItem('testArray', newTestArray)         // set local storage to array

console.log(JSON.parse(localStorage.getItem('testArray')))      // we still need to add the project functions to objects
                                                                // this must be done after local storage is loaded


// -------------------------------------------------------------------------------------

const projectStorage = getStorage()

projectStorage.forEach((proj) => {
    displayController.addToSideBar(proj)
    displayController.setProjectTitle(proj.getProjectName())
    displayController.loadTasks(proj)
})


