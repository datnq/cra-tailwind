const config = {
  app: {
    publicUrl: process.env.REACT_APP_PUBLIC_URL,
    authCallback: process.env.REACT_APP_AUTH_CALLBACK_URL,
    authProxy: process.env.REACT_APP_AUTH_PROXY,
  },
  mal: {
    authUrl: process.env.REACT_APP_MAL_AUTH_ENDPOINT,
    apiURL: process.env.REACT_APP_MAL_PROXY,
    clientID: process.env.REACT_APP_MAL_CLIENT_ID,
    clientSecret: process.env.REACT_APP_MAL_CLIENT_SECRET,
  },
}

export default config
