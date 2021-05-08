import axios from 'axios'
import config from '../config'

const client = axios.create({
  baseURL: config.mal.apiURL,
  headers: {
    'content-type': 'application/json',
    accept: 'application/json',
  },
})
client.interceptors.response.use(response => response.data)
client.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem('token'))
  if (token?.token_type && token?.access_token) {
    const tokenValue = `${token.token_type} ${token.access_token}`
    config.headers.common['Authorization'] = tokenValue
  }
  return config
})

const authClient = axios.create({
  baseURL: config.app.authProxy,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})
authClient.interceptors.response.use(response => response.data)

export { client, authClient }
