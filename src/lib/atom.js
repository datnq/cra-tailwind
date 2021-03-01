import { useAtom } from 'jotai'
import { atomWithReducer } from 'jotai/utils'
import Lockr from 'lockr'
import { useEffect } from 'react'

/**
 * Create an atom with persisted state using localstorage
 * Usages:
 *    const [tokenAtom, useTokenAtom] = createPersistedAtom('auth_token')
 *    const [token, setToken] = useTokenAtom()
 * @param {*} name localStorage item key
 * @param {*} initialValue initial value
 */
export const createPersistedAtom = (name, initialValue) => {
  if (typeof initialValue !== 'undefined') {
    Lockr.set(name, initialValue)
  }
  const theAtom = atomWithReducer(Lockr.get(name), (_, value) => {
    Lockr.set(name, value)
    return value
  })

  const theHook = () => {
    const [value, setValue] = useAtom(theAtom)
    const handler = e => {
      if (e.key === name && value !== e.newValue) {
        setValue(e.newValue)
      }
    }

    useEffect(() => {
      window.addEventListener('storage', handler)
      return () => {
        window.removeEventListener('storage', handler)
      }
    }, [])
  }

  return [theAtom, theHook]
}
