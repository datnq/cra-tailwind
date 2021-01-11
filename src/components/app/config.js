const config = {
  github: {
    contentType: 'application/vnd.github.v3+json',
    authHeader: 'Authorization',
    authMethod: 'token',
    scope: 'repo',
    apiURL: REACT_APP_GITHUB_API_URL,
    authURL: REACT_APP_GITHUB_AUTH_URL,
    clientID: REACT_APP_GITHUB_CLIENT_ID,
    redirectURI: REACT_APP_GITHUB_REDIRECT_URI,
  },
}

export default config
