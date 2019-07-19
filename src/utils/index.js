import axios from 'axios'
import { ROOT_URL } from './constants'

const http = function () {
  let instance = axios.create({
    baseUrl: ROOT_URL.URL,
    mode: 'no-cors'
  })

  return instance
}

async function onGet (url, params) {
  let data = []
  const URL = ROOT_URL.URL + url

  // console.log('on get url >>>>>>>>', URL)
  // console.log('on get params >>>>>>>>', params)

  return new Promise(function (resolve, reject) {
    http()
      .get(URL, { params })
      .then(response => {
        data = response.data

        resolve(data)
      })
      .catch(err => {
        console.log('error onGet >>>>', err)
        reject(err)
      })
  })
}

async function onPost (props) {
  const { url, data, id } = props
  let URL = ROOT_URL.URL + url

  // console.log(' url on Post >>>>>>>>>>>', URL)
  // console.log(' data on Post >>>>>>>>>>>', data)

  return new Promise((resolve, reject) => {
    if (id === undefined) {
      // new
      http()
        .post(URL, data)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    } else {
      // edit
      const newURL = URL + `/${id}`
      http()
        .put(newURL, data)
        .then(response => {
          resolve(response)
        })
        .catch(err => {
          reject(err)
        })
    }
  })
}

function onDelete (url, id) {
  let data = []
  const URL = ROOT_URL.URL + url + `/${id}`

  return new Promise(function (resolve, reject) {
    http()
      .delete(URL, {})
      .then(response => {
        data = response.data

        resolve(data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const removeData = (item, id, idName) => item[`${idName}`] !== id

const onPostDispatch = ({
  data,
  id,
  url,
  state,
  nameTypeAction
}) => dispatch => {
  dispatch({ type: `${nameTypeAction}_STATUS_POST` })

  const newMaintenance = onPost({
    url,
    data,
    // id
  })

  newMaintenance
    .then(res => {
      dispatch({ type: `${nameTypeAction}_STATUS_POST_RES` })

      let newData = res.data.data

      console.log(`${url} POST RESPONSE >>>>`, res)
      dispatch({
        type: `${
          id === undefined
            ? `ADD_${nameTypeAction}`
            : `UPDATE_${nameTypeAction}`
        }`,
        [`${state}`]: newData
      })

      setTimeout(() => {
        dispatch({ type: `${nameTypeAction}_RESET_STATUS` })
      }, 5000)
    })
    .catch(err => {
      dispatch({ type: `${nameTypeAction}_STATUS_POST_ERR` })
      console.log(`${url} >>>`, err)
    })
}

// This method is for get the list of registers and only works when the service have pagination
const onPostDispatchList = ({
  data,
  id,
  url,
  state,
  nameTypeAction
}) => dispatch => {
  dispatch({ type: `${nameTypeAction}_STATUS_POST` })

  const newMaintenance = onPost({
    url,
    data,
    id
  })

  newMaintenance
    .then(res => {
      dispatch({ type: `${nameTypeAction}_STATUS_POST_RES` })

      let newData = res.data.dataList

      console.log(`${url} POST RESPONSE >>>>`, res)
      dispatch({
        type: `ADD_LIST_${nameTypeAction}`,
        [`${state}`]: newData
      })

      setTimeout(() => {
        dispatch({ type: `${nameTypeAction}_RESET_STATUS` })
      }, 5000)
    })
    .catch(err => {
      dispatch({ type: `${nameTypeAction}_STATUS_POST_ERR` })
      console.log(`${url} >>>`, err)
    })
}

const onGetDispatch = ({ params, url, state, nameTypeAction }) => (
  dispatch,
  getState
) => {
  dispatch({ type: `${nameTypeAction}_STATUS_GET` })

  const loadMaintenance = onGet(url, params)
  loadMaintenance
    .then(res => {
      dispatch({ type: `${nameTypeAction}_STATUS_GET_RES` })

      console.log(`get ${url} RESPONSE >>>>>`, res)
      dispatch({ type: `LOAD_${nameTypeAction}`, [`${state}`]: res.data })
    })
    .catch(err => {
      dispatch({ type: `${nameTypeAction}_STATUS_GET_ERR` })
      console.log(`ERROR ${url} >>>>>`, err)
    })
}

const onGetDispatchList = ({ params, url, state, nameTypeAction }) => (
  dispatch,
  getState
) => {
  dispatch({ type: `${nameTypeAction}_STATUS_GET` })

  const loadMaintenance = onGet(url, params)
  loadMaintenance
    .then(res => {
      dispatch({ type: `${nameTypeAction}_STATUS_GET_RES` })
      
      console.log(`get ${url} RESPONSE >>>>>`, res)
      dispatch({ type: `LOAD_${nameTypeAction}`, [`${state}`]: res })
    })
    .catch(err => {
      dispatch({ type: `${nameTypeAction}_STATUS_GET_ERR` })
      console.log(`ERROR ${url} >>>>>`, err)
    })
}

const onDeleteDispatch = ({ id, url, state, nameTypeAction }) => dispatch => {
  dispatch({ type: `${nameTypeAction}_STATUS_DELETE` })

  const deleteMaintenance = onDelete(url, id)
  deleteMaintenance
    .then(res => {
      console.log(`DELETE ${url} RESPONSE >>>`, res)
      dispatch({ type: `${nameTypeAction}_STATUS_DELETE_RES` })

      dispatch({ type: `DELETE_${nameTypeAction}`, [`${state}`]: id })

      setTimeout(() => {
        dispatch({ type: `${nameTypeAction}_RESET_STATUS` })
      }, 5000)
    })
    .catch(err => {
      dispatch({ type: `${nameTypeAction}_STATUS_DELETE_ERR` })
      console.log('deleteLocation ERR >>>>', err)
    })
}

export {
  onPost,
  onGet,
  onDelete,
  removeData,
  onPostDispatch,
  onPostDispatchList,
  onGetDispatch,
  onGetDispatchList,
  onDeleteDispatch,
}
