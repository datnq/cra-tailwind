import qs from 'qs'
import config from '../config'

export const apiURL = (resource, params = {}) => {
  const url = config.app.apiURL + '/' + resource
  return url + qs.stringify(params, { addQueryPrefix: true })
}

export const authURL = (action, params = {}) => {
  const url = config.auth.baseURL + '/' + action
  return url + qs.stringify(params, { addQueryPrefix: true })
}
