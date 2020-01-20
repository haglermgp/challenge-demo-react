import statusReducer from './status.js'

const updateData = (item, newData, idName) => {
  if (item[`${idName}`] !== newData[`${idName}`]) {
    return item
  }

  return {
    ...item,
    ...newData
  }
}

// This function make more easy the CRUD operation for reducers
const commonArrayReducer = props => {
  const {
    state: { status, data },
    action,
    nameState,
    nameTypeAction,
    fieldUpdate,
    fielDelete
  } = props

  let payload = action[`${nameState}`]

  switch (action.type) {
    case `LOAD_${nameTypeAction}`:

      return {
        status,
        data: [...data, ...payload]
      }

    case `ADD_${nameTypeAction}`:
      return {
        status,
        data: [...data, payload]
      }

    case `ADD_LIST_${nameTypeAction}`:
      return {
        status,
        data: [...payload]
      }

    case `UPDATE_${nameTypeAction}`:
      
      return {
        status,
        data: data.map(item => updateData(item, payload, fieldUpdate))
      }

    case `DELETE_${nameTypeAction}`:
      return {
        status,
        data: data.filter(item => item[`${fielDelete}`] !== payload)
      }

    default:
      return {
        status: statusReducer(undefined, action, nameTypeAction),
        data: [...data]
      }
  }
}

// This function make more easy the CRUD operation for reducers
const commonObjectReducer = props => {
  const {
    state: { status, data },
    action,
    nameState,
    nameTypeAction,
  } = props

  let payload = action[`${nameState}`]

  switch (action.type) {
    case `LOAD_${nameTypeAction}`:

      return {
        status,
        data: {...payload}
      }

    case `ADD_${nameTypeAction}`:
      return {
        status,
        data: {...data, ...payload}
      }

    // ********* SUBJECT TO CHANGE
    case `UPDATE_${nameTypeAction}`:
      return {
        status,
        data: {...data, ...payload}
      }

    // ********* SUBJECT TO CHANGE
    case `DELETE_${nameTypeAction}`:
      return {
        status,
        data: {...data}
      }

    default:
      return {
        status: statusReducer(undefined, action, nameTypeAction),
        data: {...data}
      }
  }
}

export { commonArrayReducer, commonObjectReducer }
