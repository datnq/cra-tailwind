import { config } from '../config/github'
import qs from 'qs'

const state = '14b6035ec5dc6a8c98d0'

const githubAPI = client => {
  const conf = config()
  return {
    auth: () => {
      const params = qs.stringify(
        {
          client_id: conf.clientID,
          redirect_uri: conf.redirectURI,
          scope: conf.scope,
          allow_signup: false,
          state,
        },
        { addQueryPrefix: true },
      )
      window.location.href = `${conf.authURL}${params}`
      return true
    },
    getToken: code => {
      const params = qs.stringify(
        {
          client_id: conf.clientID,
          client_secret: conf.clientSecret,
          redirect_uri: process.env.REACT_APP_PUBLIC_URL,
          code,
          state,
        },
        { addQueryPrefix: true },
      )
      return client
        .post(`${conf.tokenURL}${params}`)
        .then(response => response.data)
        .then(qs.parse)
    },
  }
}

export default githubAPI
