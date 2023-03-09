import project from './projects'
import task from './tasks'

const displayController = () => {
  //properties
  const sideBar = document.querySelector('.sidebar-projectList')
  let projectListItem = document.querySelectorAll('.sidebar__project')
  const projectTitle = document.querySelector('#projectTitle')
  const tableBody = document.querySelector('tbody')
  const newTask = document.querySelector('#new-task')

  // functions
  const addToSideBar = (project) => {
    // create list element and append to sidebar
    let listItem = document.createElement('li')
    listItem.classList.add('sidebar__project')
    listItem.textContent = `${project.getProjectName()}`

    listItem.addEventListener('click', () => {
      setProjectTitle(listItem.innerText)
      loadTasks(project)
    })

    sideBar.appendChild(listItem)
  }

  const createTableHeader = () => {
    const header = `
    <tr>
      <th> </th>
      <th>Task</th>
      <th>Due Date</th>
      <th>Priority</th>
    </tr>
    `
    tableBody.innerHTML = header
  }

  const loadTasks = (project) => {
    let taskList = project.getTaskList()

    createTableHeader()

    taskList.forEach((element) => {
      populateTaskHTMLData(element)
    })
  }

  const getProjectItems = () => {
    projectListItem = document.querySelectorAll('.sidebar__project')
    return projectListItem
  }

  const populateTaskHTMLData = (task) => {
    let tr = document.createElement('tr')
    tr.classList.add('table-data')

    

    let tdInputCheckbox = document.createElement('td')
    let inputCheckBox = document.createElement('input')
    inputCheckBox.setAttribute('type', 'checkbox')

    inputCheckBox.addEventListener('click', () => {
      // event listener for checkbox to adjust task status
      if (inputCheckBox.checked) {
        task.status = 'complete'
        tr.classList.add('complete')
      } else if (!inputCheckBox.checked) {
        task.status = 'incomplete'
        if (tr.classList.contains('complete')) {
          tr.classList.remove('complete')
        }
      }
      console.log(`Task: ${task.name}, Status: ${task.status}`)
    })

    tdInputCheckbox.appendChild(inputCheckBox)

    tr.appendChild(tdInputCheckbox)

    let tdTaskName = document.createElement('td')
    tdTaskName.textContent = task.name
    tr.appendChild(tdTaskName)

    let tdTaskDueDate = document.createElement('td')
    tdTaskDueDate.textContent = task.dueDate
    tr.appendChild(tdTaskDueDate)

    let tdTaskPriority = document.createElement('td')
    tdTaskPriority.textContent = task.priority
    tr.appendChild(tdTaskPriority)

    if (task.status === 'complete') {
      tr.classList.add('complete')
      inputCheckBox.checked = true;
    }

    tableBody.appendChild(tr)
  }

  const setProjectTitle = (value) => {
    projectTitle.textContent = value
  }

  return {
    addToSideBar,
    setProjectTitle,
    getProjectItems,
    populateTaskData: populateTaskHTMLData,
    loadTasks,
  }
}

export default displayController
