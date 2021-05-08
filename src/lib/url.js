import qs from 'qs'
import config from '../config'

export const apiURL = (resource, params = {}) => {
  return (
    config.mal.apiURL +
    resource +
    qs.stringify(params, { addQueryPrefix: true })
  )
}

export const authURL = (action, params = {}) => {
  return (
    config.mal.authUrl + action + qs.stringify(params, { addQueryPrefix: true })
  )
}
