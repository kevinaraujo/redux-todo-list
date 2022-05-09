import { types } from '../types'

const AddTask = task => ({
    type: types.ADD_TASK,
    payload: task
})

const actions = {
    AddTask
}

export { actions }