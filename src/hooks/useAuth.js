import { codeChallenger, codeVerifier } from '../lib/pkce'
import { atom, useAtom } from 'jotai'
import { tokenAtom } from '../api/state'
import { authConfig, appConfig } from '../config'
import QueryString from 'qs'

const authURL = (path, params = {}) => {
  return (
    authConfig.baseURL +
    '/' +
    path +
    QueryString.stringify(params, { addQueryPrefix: true })
  )
}

const proxyURL = (path, params = {}) => {
  return (
    appConfig.authProxy +
    '/' +
    path +
    QueryString.stringify(params, { addQueryPrefix: true })
  )
}

const authAPIAtom = atom(get => {
  const token = get(tokenAtom)
  // console.log(token)
  return {
    isAutheticated() {
      return !!token
    },
    async authorize() {
      const verifier = codeVerifier()
      const method = authConfig.challengeMethod
      const url = authURL('authorize', {
        response_type: 'code',
        client_id: authConfig.clientID,
        redirect_uri: authConfig.redirectURL,
        code_challenge: await codeChallenger(verifier, method),
        code_challenge_method: method,
        state: verifier,
        scope: 'openid',
      })

      window.location.href = url
    },
    async token() {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')
      const verifier = urlParams.get('state')

      const params = new URLSearchParams()
      params.append('grant_type', 'authorization_code')
      params.append('code', code)
      params.append('redirect_uri', authConfig.redirectURL)
      params.append('code_verifier', verifier)

      return fetch(proxyURL('token'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      }).then(response => response.json())
    },
  }
})

const useAuth = () => {
  const [authAPI] = useAtom(authAPIAtom)
  return authAPI
}
export default useAuth
