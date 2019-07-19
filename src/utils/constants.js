import CONFIG from './config/index.json'

export const ROOT_URL = {
  URL: CONFIG.server
}

export const GET_URL = {
	REQUESTS_LIST: 'request',
	MANAGE_LIST: 'manage',
}

export const POST_URL = {
	MANAGE: 'manage',
}
