import { types } from '../types/todo'

const AddTask = task => ({
    type: types.TODO_ADD_TASK,
    payload: task
})

const actions = {
    AddTask
}

export { actions }