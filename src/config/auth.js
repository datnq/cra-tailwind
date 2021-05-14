const authConfig = {
  baseURL: process.env.REACT_APP_AUTH_URL,
  clientID: process.env.REACT_APP_AUTH_CLIENT_ID,
  redirectURL: process.env.REACT_APP_AUTH_CALLBACK_URL,
  challengeMethod: process.env.REACT_APP_AUTH_CHALLENGE_METHOD
}

export default authConfig