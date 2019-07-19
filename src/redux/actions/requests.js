import { onGetDispatchList } from '../../utils'
import { GET_URL } from '../../utils/constants'

const loadRequestsList = params =>
  onGetDispatchList({
    params,
    url: GET_URL.REQUESTS_LIST,
    state: 'requestsList',
    nameTypeAction: 'REQUESTS_LIST'
  })

export { loadRequestsList }
