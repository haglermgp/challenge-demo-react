import { commonObjectReducer } from './common'

const anonymousStatus = (state = { status: {}, data: {} }, action) =>
  commonObjectReducer({
    state,
    action,
    nameState: 'anonymousStatus', // name state
    nameTypeAction: 'ANONYMOUS_STATUS', // name action
    fieldUpdate: 'anonymous_status_id',
    fieldDelete: 'anonymous_status_id',
  })

export {
	anonymousStatus,
}