import auth from './auth'
import firebase from './firebase'

const config = {
  app: {
    publicUrl: process.env.REACT_APP_PUBLIC_URL,
  },
  firebase,
  auth,
}

export default config
