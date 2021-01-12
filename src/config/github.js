const {
  REACT_APP_GITHUB_API_URL,
  REACT_APP_GITHUB_AUTH_URL,
  REACT_APP_GITHUB_CLIENT_ID,
  REACT_APP_GITHUB_CLIENT_SECRET,
  REACT_APP_GITHUB_REDIRECT_URI,
  REACT_APP_GITHUB_TOKEN_URL,
} = process.env

export const config = () => {
  return {
    // contentType: 'application/vnd.github.v3+json',
    contentType: 'application/json',
    authHeader: 'Authorization',
    authMethod: 'token',
    scope: 'repo',
    apiURL: REACT_APP_GITHUB_API_URL,
    authURL: REACT_APP_GITHUB_AUTH_URL,
    tokenURL: REACT_APP_GITHUB_TOKEN_URL,
    clientID: REACT_APP_GITHUB_CLIENT_ID,
    clientSecret: REACT_APP_GITHUB_CLIENT_SECRET,
    redirectURI: REACT_APP_GITHUB_REDIRECT_URI,
  }
}
