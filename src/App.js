import React, { useState, UseState } from 'react'
import { store } from './store'

const App = () => {
  const [task, updateTask] = useState('')
  const [tasks, updateTasks] = useState([])

  const handleInputChange = (event) => {
    updateTask(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    store.dispatch({
      type: 'ADD_TASK',
      payload: task
    })

    updateTask('')
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input onChange={handleInputChange} value={task} />
        <button>Add</button>
      </form>

      <ul>
        { tasks.map((t, i) => (
          <li key={i}> {t}</li>
        ))}
      </ul>
    </>
  )
}

export default App
