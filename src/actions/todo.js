import { createAction } from 'redux-actions'
import { types } from '../types/todo'

const actions = {
    AddTask: createAction(types.TODO_ADD_TASK)
}

export { actions }