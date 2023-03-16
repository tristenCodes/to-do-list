import project from './projects'
import { addToStorage } from './storage'
import task from './tasks'
const { add, format } = require('date-fns')

const displayController = () => {
  //properties
  const sideBar = document.querySelector('.sidebar-projectList')
  let projectListItem = document.querySelectorAll('.sidebar__project')
  const projectTitle = document.querySelector('#projectTitle')
  const taskContainer = document.querySelector('.task-container')
  let taskFormContainer
  const newTask = document.querySelector('#new-task')
  let currentProject
  let taskForm = document.querySelector('.task-form')
  const submit = document.querySelector('#submit')
  const createProject = document.querySelector('#new-project')
  
  // functions
  const setProjectTitle = (value) => {
    projectTitle.textContent = value
  }

  const addToSideBar = (project) => {
    // create list element and append to sidebar
    let listItem = document.createElement('li')
    listItem.classList.add('sidebar__project')
    listItem.textContent = `${project.getProjectName()}`
    addToStorage(project)
    console.log(project)

    listItem.addEventListener('click', () => {
      currentProject = project
      setProjectTitle(listItem.innerText)

      if (project.getTaskList().length !== 0){
        loadTasks(project)
      }
      else {
        taskContainer.innerHTML = ''
      }

    })
    sideBar.appendChild(listItem)
  }

  const loadTasks = (project) => {
    taskContainer.innerHTML = ''
    let taskList = project.getTaskList()


      let [tasks] = taskList
      if (Array.isArray(tasks)){
        tasks.forEach((element) => {
          populateTaskHTMLData(element)
        })
      }
      else {
        populateTaskHTMLData(tasks)
      }
  }

  const getProjectItems = () => {
    projectListItem = document.querySelectorAll('.sidebar__project')
    return projectListItem
  }

  const populateTaskHTMLData = (task) => {
    let taskDiv = document.createElement('div')
    let taskLeft = document.createElement('div')
    let taskRight = document.createElement('div')



    taskLeft.classList.add('task-left')
    taskRight.classList.add('task-right')
    taskDiv.classList.add('task-div')
    taskDiv.classList.add('tool-tip')

    let inputCheckBox = document.createElement('input')
    inputCheckBox.setAttribute('type', 'checkbox')

    inputCheckBox.addEventListener('click', () => {
      // event listener for checkbox to adjust task status
      if (inputCheckBox.checked) {
        task.status = 'complete'
        taskDiv.classList.add('complete')
      } else if (!inputCheckBox.checked) {
        task.status = 'incomplete'
        if (taskDiv.classList.contains('complete')) {
          taskDiv.classList.remove('complete')
        }
      }
    })

    const taskName = document.createElement('div')
    taskName.textContent = task.name

    if (task.status === 'complete') {
      taskDiv.classList.add('complete')
      inputCheckBox.checked = true
    }

    const dueDate = document.createElement('div')
    dueDate.textContent = task.dueDate

    const priority = document.createElement('div')
    priority.textContent = `Priority: ${task.priority}`

    taskLeft.appendChild(inputCheckBox)
    taskLeft.appendChild(taskName)
    taskRight.appendChild(dueDate)
    taskRight.appendChild(priority)

    taskDiv.appendChild(taskLeft)
    taskDiv.appendChild(taskRight)

    taskContainer.appendChild(taskDiv)
  }

  newTask.addEventListener('click', () => {
    taskFormContainer = document.querySelector('.task-form-container')
    taskFormContainer.style.display ='block'
  })

  submit.addEventListener('click', () => {

      event.preventDefault()

      try {

      let taskName = document.getElementById('task-name').value

      // add day function is to fix the timeone offset I was encountering, 
      // causing the selected date to be a day behind
      let taskDueDate = add(new Date(document.getElementById('task-duedate').value), {days: 1}) 
      if (taskDueDate == 'Invalid Date') {
        taskDueDate = new Date()
      }
      
      
      
      let taskDescription = document.getElementById('task-description').value
      let taskPriority = document.getElementById('task-priority').value



      currentProject.addToTaskList(task(`${taskName}`, `${taskDescription}`, `incomplete`, format(taskDueDate, 'P'), `${taskPriority}`))
      loadTasks(currentProject)
      taskFormContainer.style.display ='none'
      taskForm.reset()
      } catch (error) {
        console.log(error)
      }

  })

  createProject.addEventListener('click', () => {
    let newProjName = prompt('enter a new project name')
    if (newProjName === null || newProjName === undefined || newProjName === '') {
      alert('invalid name entry')
      newProjName = 'invalid'
    }
    else {
      const newProj = project(newProjName)
      addToSideBar(newProj)
    }
    
  })




  return {
    addToSideBar,
    setProjectTitle,
    getProjectItems,
    populateTaskHTMLData,
    loadTasks
  }
}

export default displayController
