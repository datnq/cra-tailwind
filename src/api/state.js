import { atom } from 'jotai'
import { atomWithLocalStorage } from '../lib/atom'
import { client } from './client'

export const httpClientAtom = atom(client)
export const tokenAtom = atomWithLocalStorage('token')
export const verifierAtom = atomWithLocalStorage('verifier')
