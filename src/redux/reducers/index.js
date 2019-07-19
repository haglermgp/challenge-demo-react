import { combineReducers } from 'redux'

import { anonymousStatus } from './anonymousStatus'
import { requestsList } from './request'
import { manageList, manage } from './manage'

const reducersApp = combineReducers({
	// ----- ANONYMUS STATUS -------
	anonymousStatus,
	// ----- REQUEST -----
	requestsList,
	// ----- MANAGE -----
	manageList,
	manage,
})

const rootReducer = (state, action) => {
  return reducersApp(state, action)
}

export default rootReducer