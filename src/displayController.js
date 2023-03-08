import project from './projects'

const displayController = () => {
  //properties
  const sideBar = document.querySelector('.sidebar-projectList')
  let projectListItem = document.querySelectorAll('.sidebar__project')
  const projectTitle = document.querySelector('#projectTitle')

  //   console.log(document.querySelectorAll('.sidebar__project'))

  // functions
  const addToSideBar = (value) => {

    // create list element and append to sidebar
    let listItem = document.createElement('li')
    listItem.classList.add('sidebar__project')
    listItem.textContent = `${value}`

    listItem.addEventListener('click', () => {
      setProjectTitle(listItem.innerText)
    })

    sideBar.appendChild(listItem)

    // sideBar.addEventListener('click', (elem) => {
    //   setProjectTitle(elem.target.textContent)
    //   console.log(elem.target.textContent)
    // })
  }

  const getProjectItems = () => {
    projectListItem = document.querySelectorAll('.sidebar__project')
    return projectListItem
  }

  //   const applyProjectItemEventListener = (item) => {
  //     item.addEventListener('click', () => {
  //     setProjectTitle(item.textContent)
  //     })
  //   }

  const updateProjectHTML = (elem) => {
    setProjectTitle(elem.target.textContent)
  }

  const removeFromSideBar = (value) => {}

  const setProjectTitle = (value) => {
    projectTitle.textContent = value
  }

  return {
    addToSideBar,
    setProjectTitle,
    getProjectItems,
  }
}

export default displayController
