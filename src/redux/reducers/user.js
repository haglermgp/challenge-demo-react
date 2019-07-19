import { commonObjectReducer } from './common'

const user = (state = { status: {}, data: {} }, action) =>
  commonObjectReducer({
    state,
    action,
    nameState: 'user', // name state
    nameTypeAction: 'USER', // name action
    fieldUpdate: 'USER_id',
    fieldDelete: 'USER_id',
  })

export {
	user,
}