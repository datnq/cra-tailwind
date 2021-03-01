import Lockr from 'lockr'
import { atom } from 'jotai'
import config from '../config'

export const tokenAtom = atom(
  Lockr.get(config.auth.tokenKey),
  (get, set, token) => {
    Lockr.set(config.auth.tokenKey, token)
    set(tokenAtom, token)
  },
)
