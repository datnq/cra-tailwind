import authConfig from './auth'

const config = {
  app: {
    publicUrl: process.env.REACT_APP_PUBLIC_URL,
    authCallback: process.env.REACT_APP_AUTH_CALLBACK_URL,
    authProxy: process.env.REACT_APP_AUTH_PROXY,
  },
  auth: authConfig,
}

export { authConfig }

export default config
