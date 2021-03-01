import firebase from 'firebase'
import Lockr from 'lockr'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyB9VnwN8hQt3e3GPf9M5WYzL32E-Gp8amA',
  authDomain: 'my-test-project-83512.firebaseapp.com',
  databaseURL: 'https://my-test-project-83512.firebaseio.com',
  projectId: 'my-test-project-83512',
  storageBucket: 'my-test-project-83512.appspot.com',
  messagingSenderId: '449285810566',
  appId: '1:449285810566:web:ce395f9f2c70cb4033e407',
})

export const requestLogin = email =>
  app
    .auth()
    .sendSignInLinkToEmail(email, {
      url: 'http://localhost:3000/auth/token',
      handleCodeInApp: true,
    })
    .then(response => {
      Lockr.set('email_to_signin', email)
      return response
    })

export const login = () => {
  if (app.auth().isSignInWithEmailLink(window.location.href)) {
    const email = Lockr.get('email_to_signin')
    return app
      .auth()
      .signInWithEmailLink(email, window.location.href)
      .then(response => {
        Lockr.rm('email_to_signin')
        return response
      })
  }
  return Promise.reject(new Error('Invalid signin link'))
}

export const logout = () => app.auth().signOut()
