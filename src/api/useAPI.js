import axios from 'axios'
import qs from 'qs'
import cookie from 'js-cookie'
import { config } from '../config/github'
import githubAPI from './github'

const conf = config()

export const apiConfig = {
  baseURL: conf.apiURL,
  headers: {
    Accept: conf.contentType,
    'Content-Type': conf.contentType,
  },
  withCredentials: true,
  paramsSerializer: params => {
    return qs.stringify(params, {
      skipNulls: true,
      indices: false,
    })
  },
}

if (cookie.get('token')) {
  apiConfig.headers[conf.authHeader] = `${conf.authMethod} ${cookie.get(
    'token',
  )}`
}

const client = axios.create(apiConfig)

const useAPI = () => {
  return {
    auth: githubAPI(client),
  }
}
export default useAPI
