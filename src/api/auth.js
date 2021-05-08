import config from '../config'
import { codeChallenger } from '../lib/pkce'
import { authURL } from '../lib/url'

const auth = client => {
  return {
    async authorize(verifier) {
      const method = 'plain'
      const url = authURL('authorize', {
        response_type: 'code',
        client_id: config.mal.clientID,
        redirect_uri: config.app.authCallback,
        code_challenge: await codeChallenger(verifier, method),
        code_challenge_method: method,
      })

      window.location.href = url
    },
    token(code, verifier) {
      const params = new URLSearchParams()
      params.append('client_id', config.mal.clientID)
      params.append('client_secret', config.mal.clientSecret)
      params.append('grant_type', 'authorization_code')
      params.append('code', code)
      params.append('redirect_uri', config.app.authCallback)
      params.append('code_verifier', verifier)

      return client.post('/token', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
    },
  }
}

export default auth
