import authConfig from './auth'

const appConfig = {
  publicUrl: process.env.REACT_APP_PUBLIC_URL,
  authCallback: process.env.REACT_APP_AUTH_CALLBACK_URL,
  authProxy: process.env.REACT_APP_AUTH_PROXY,
}

const config = {
  app: appConfig,
  auth: authConfig,
}

export { authConfig, appConfig }

export default config
