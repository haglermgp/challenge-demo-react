import { commonArrayReducer, commonObjectReducer } from './common'

const manageList = (state = { status: {}, data: [] }, action) =>
  commonArrayReducer({
    state,
    action,
    nameState: 'manageList', // name state
    nameTypeAction: 'MANAGE_LIST', // name action
    fieldUpdate: 'id',
    fieldDelete: 'id',
  })

const manage = (state = { status: {}, data: {} }, action) =>
  commonObjectReducer({
    state,
    action,
    nameState: 'manage', // name state
    nameTypeAction: 'MANAGE', // name action
    fieldUpdate: 'id',
    fieldDelete: 'id',
  })

export { manageList, manage }