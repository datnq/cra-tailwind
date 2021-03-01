import auth0 from 'auth0-js'
import Lockr from 'lockr'
import { atom } from 'jotai'
import config from '../config'

const client = new auth0.WebAuth(config.auth)

export const tokenAtom = atom(Lockr.get('auth_token'))

export const authTokenAtom = atom(
  get => get(tokenAtom),
  (get, set, token) => {
    Lockr.set('auth_token', token)
    return set(tokenAtom, token)
  },
)

export const loginAtom = atom(get => {
  return email => {
    return new Promise((resolve, reject) => {
      client.passwordlessStart(
        {
          connection: 'email',
          send: 'link',
          email,
          authParams: {
            state: email,
            scope: 'openid profile',
          },
        },
        (err, res) => {
          if (err) {
            return reject(err)
          }
          resolve(res)
        },
      )
    })
  }
})

export const getTokenAtom = atom(get => {
  return ({ email, code }) => {
    return new Promise((resolve, reject) => {
      client.passwordlessLogin(
        {
          connection: 'email',
          email,
          verificationCode: code,
        },
        (err, res) => {
          if (err) {
            return reject(err)
          }
          resolve(res)
        },
      )
    })
  }
})
