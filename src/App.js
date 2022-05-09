import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './actions/todo'

const App = () => {
  const [task, updateTask] = useState('')
  const dispatch = useDispatch()
  const tasks = useSelector(state => state)

  const handleInputChange = (event) => {
    updateTask(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    dispatch(actions.AddTask(task))

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
