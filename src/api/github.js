import { config } from '../config/github'
import qs from 'qs'

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
        },
        { addQueryPrefix: true },
      )
      window.location.href = `${conf.authURL}${params}`
      return true
    },
    getToken: code => {
      const params = {
        client_id: conf.clientID,
        client_secret: conf.clientSecret,
        code,
      }
      return client
        .post(`${conf.tokenURL}`, params)
        .then(response => response.data)
        .then(qs.parse)
    },
  }
}

export default githubAPI
