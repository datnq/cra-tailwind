const {
  REACT_APP_GITHUB_API_URL,
  REACT_APP_GITHUB_AUTH_URL,
  REACT_APP_GITHUB_CLIENT_ID,
  REACT_APP_GITHUB_REDIRECT_URI,
} = process.env

export const githubConfig = {
  contentType: 'application/vnd.github.v3+json',
  authHeader: 'Authorization',
  authMethod: 'token',
  scope: 'repo',
  apiURL: REACT_APP_GITHUB_API_URL,
  authURL: REACT_APP_GITHUB_AUTH_URL,
  clientID: REACT_APP_GITHUB_CLIENT_ID,
  redirectURI: REACT_APP_GITHUB_REDIRECT_URI,
}

const githubAPI = () => {
  return {
    login: () => {
      const params = qs.stringify(
        {
          client_id: githubConfig.clientID,
          redirect_uri: githubConfig.redirectURI,
          scope: githubConfig.scope,
          allow_signup: false,
        },
        { addQueryPrefix: true },
      )
      const url = `${githubConfig.authURL}${params}`
      window.location.href = url
      return true
    },
  }
}

export default githubAPI
