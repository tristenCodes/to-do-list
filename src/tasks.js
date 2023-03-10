import { format } from 'date-fns'

const task = (taskName, taskDescription, status, dueDate, priority) => {

  return {
    set name(value) {
      taskName = value
    },

    get name() {
      return taskName
    },

    set description(value) {
      taskDescription = value
    },

    get description() {
      return taskDescription
    },

    set status(value) {
      status = value
    },

    get status() {
      return status
    },

    set dueDate(value) {
      dueDate = value
    },

    get dueDate() {
      return dueDate
    },

    set priority(value) {
      priority = value
    },

    get priority() {
      return priority
    },
  }
}

export default task
