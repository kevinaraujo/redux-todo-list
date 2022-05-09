import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const [task, updateTask] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector(state => state)

  const handleInputChange = (event) => {
    updateTask(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    dispatch({
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
