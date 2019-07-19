// import { Notify } from '../../../components'

/// this functions makes posible update the status of each state that redux store manage
const status = (
  state = {
    loading: { get: false, post: false, info: '' },
    alert: { success: false, error: false, warning: false, info: '' }
  },
  action,
  nameTypeAction
) => {
  // const info = action.info
  switch (action.type) {
    case `${nameTypeAction}_RESET_STATUS`:
      const resetStatus = {
        loading: { get: false, post: false },
        alert: { success: false, error: false, warning: false, info: '' }
      }
      return {
        ...state,
        ...resetStatus
      }

    case `${nameTypeAction}_STATUS_POST`:
      const statusPost = state
      statusPost.loading.post = true
      return {
        ...state,
        ...statusPost
      }

    case `${nameTypeAction}_STATUS_POST_RES`:
      // if (info !== undefined && info !== null && info !== '') Notify('success', info)

      const statusPostRes = state
      statusPostRes.loading.post = false
      statusPostRes.alert.success = true

      return {
        ...state,
        ...statusPostRes
      }

    case `${nameTypeAction}_STATUS_POST_ERR`:
      // if (info !== undefined && info !== null && info !== '') Notify('error', info)

      const statusPostErr = state
      statusPostErr.loading.post = false
      statusPostErr.alert.error = true

      return {
        ...state,
        ...statusPostErr
      }

    case `${nameTypeAction}_STATUS_DELETE`:
      // message.loading('Eliminando registro...', 3)

      const statusDelete = state
      statusDelete.loading.post = true

      return {
        ...state,
        ...statusDelete
      }

    case `${nameTypeAction}_STATUS_DELETE_RES`:
      // Notify('error', info)

      const statusDeleteRes = state
      statusDeleteRes.loading.post = false
      statusDeleteRes.alert.success = true

      return {
        ...state,
        ...statusDeleteRes
      }

    case `${nameTypeAction}_STATUS_DELETE_ERR`:
      // Notify('error', info)

      const statusDeleteErr = state
      statusDeleteErr.loading.post = false
      statusDeleteErr.alert.error = true

      return {
        ...state,
        ...statusDeleteErr
      }

    case `${nameTypeAction}_STATUS_GET`:
      const statusGet = state
      statusGet.loading.get = true

      return {
        ...state,
        ...statusGet
      }

    case `${nameTypeAction}_STATUS_GET_RES`:
      const statusGetRes = state
      statusGetRes.loading.get = false

      return {
        ...state,
        ...statusGetRes
      }

    case `${nameTypeAction}_STATUS_GET_ERR`:
      // Notify('error', info)

      const statusGetErr = state
      statusGetErr.loading.get = false

      return {
        ...state,
        ...statusGetErr
      }

    default:
      return state
  }
}

export default status
