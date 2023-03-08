const task = () => {
  // properties
  let taskName = ''
  let taskDescription = ''
  let status
  let dueDate
  let priority
  let notes

  return {
    set name(value) {
      taskName = value
    },
    get name() {
      return taskName
    },

    set taskDescription(value) {
      taskDescription = value
    },
    get taskDescription() {
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

    set notes(value) {
      notes = value
    },
    get notes() {
      return notes
    },
  }
}

export default task
