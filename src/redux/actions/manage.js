import { onPost, onGetDispatchList } from '../../utils'

import { GET_URL, POST_URL } from '../../utils/constants'
import { Notify } from '../../components'

const loadMangeList = params =>
  onGetDispatchList({
    params,
    url: GET_URL.MANAGE_LIST,
    state: 'manageList',
    nameTypeAction: 'MANAGE_LIST'
  })

const selectManage = id => (dispatch, getState) => {
  const dataList = getState().manageList

  dataList.data.forEach(item => {
    if (id === item.id) {
      dispatch({ type: 'ADD_MANAGE', manage: item })
    }
  })
}

const updateManage = (data, id) => dispatch => {
  dispatch({ type: 'MANAGE_STATUS_POST' })

  const url = POST_URL.MANAGE

  const newMaintenance = onPost({
    url,
    data,
    id
  })

  newMaintenance
    .then(res => {
      dispatch({ type: `MANAGE_POST_RES` })

      let newData = res.data

      if (newData !== null) {
        dispatch({
          type: `${
            id === undefined
              ? `ADD_MANAGE`
              : `UPDATE_MANAGE`
          }`,
          manage: newData
        })

        dispatch({
          type: `${
            id === undefined
              ? `ADD_MANAGE_LIST`
              : `UPDATE_MANAGE_LIST`
          }`,
          manageList: newData
        })

        Notify('success', 'Succces update')

        setTimeout(() => {
          dispatch({ type: `USER_BANK_ACCOUNT_RESET_STATUS` })
        }, 3000)
      } else {
        Notify('error', 'Error update')
      }
    })
    .catch(err => {
      dispatch({ type: `MANAGE_POST_ERR` })
      console.log(`${url} >>>`, err)
    })
}

export { loadMangeList, selectManage, updateManage }
