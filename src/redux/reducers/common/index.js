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
        data: [...payload]
        // data: [...data, ...payload]
      }
      // return  [ ...state, ...payload ]

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
      // return  [ ...state, payload ]

    case `UPDATE_${nameTypeAction}`:
      
      return {
        status,
        data: data.map(item => updateData(item, payload, fieldUpdate))
      }
      // return state.map(item => updateData(item, payload, fieldUpdate))

    case `DELETE_${nameTypeAction}`:
      return {
        status,
        data: data.filter(item => item[`${fielDelete}`] !== payload)
      }
      // return state.filter(item => item[`${fielDelete}`] !== payload)

    default:
      return {
        // status: {},
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
    // fieldUpdate,
    // fielDelete
  } = props

  let payload = action[`${nameState}`]

  switch (action.type) {
    case `LOAD_${nameTypeAction}`:

      return {
        status,
        data: {...payload}
        // data: [...data, ...payload]
      }
      // return  [ ...state, ...payload ]

    case `ADD_${nameTypeAction}`:
      return {
        status,
        data: {...data, ...payload}
      }
      // return  [ ...state, payload ]

    // ********* SUBJECT TO CHANGE
    case `UPDATE_${nameTypeAction}`:
      return {
        status,
        data: {...data, ...payload}
        // data: data.map(item => updateData(item, payload, fieldUpdate))
      }
      // return state.map(item => updateData(item, payload, fieldUpdate))

    // ********* SUBJECT TO CHANGE
    case `DELETE_${nameTypeAction}`:
      return {
        status,
        data: {...data}
        // data: data.filter(item => item[`${fielDelete}`] !== payload)
      }
      // return state.filter(item => item[`${fielDelete}`] !== payload)

    default:
      return {
        // status: {},
        status: statusReducer(undefined, action, nameTypeAction),
        data: {...data}
      }
  }
}

export { commonArrayReducer, commonObjectReducer }
