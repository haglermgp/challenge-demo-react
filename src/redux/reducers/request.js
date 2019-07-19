import { commonArrayReducer } from './common'

const requestsList = (state = { status: {}, data: [] }, action) =>
  commonArrayReducer({
    state,
    action,
    nameState: 'requestsList', // name state
    nameTypeAction: 'REQUESTS_LIST', // name action
    fieldUpdate: 'id',
    fieldDelete: 'id',
  })

export { requestsList }