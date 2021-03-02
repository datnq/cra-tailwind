import firebase from 'firebase/app'
import Lockr from 'lockr'
import config from '../config'

import 'firebase/auth'

const app = !firebase.apps.length
  ? firebase.initializeApp(config.firebase)
  : firebase.app()

export const requestLogin = email =>
  app
    .auth()
    .sendSignInLinkToEmail(email, {
      url: config.app.publicUrl + config.auth.tokenEndpoint,
      handleCodeInApp: true,
    })
    .then(response => {
      Lockr.set(config.auth.emailKey, email)
      return response
    })

export const login = () => {
  if (app.auth().isSignInWithEmailLink(window.location.href)) {
    const email = Lockr.get(config.auth.emailKey)
    return app
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then(({ user }) => {
        Lockr.rm(config.auth.emailKey)
        const result = user.toJSON()
        return { token: result.stsTokenManager, user }
      })
  }
  return Promise.reject(new Error('Invalid signin link'))
}

export const logout = () => app.auth().signOut()
