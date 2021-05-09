const authConfig = {
  baseURL: process.env.REACT_APP_AUTH_URL,
  clientID: process.env.REACT_APP_AUTH_CLIENT_ID,
  clientSecret: process.env.REACT_APP_MAL_CLIENT_SECRET,
  redirectURL: process.env.REACT_APP_AUTH_CALLBACK_URL,
  challengeMethod: process.env.REACT_APP_AUTH_CHALLENGE_METHOD
}

export default authConfig