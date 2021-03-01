import { atom } from 'jotai'
import Lockr from 'lockr'
import config from '../config'

export const userAtom = atom(Lockr.get('user'))
export const configAtom = atom(config)
