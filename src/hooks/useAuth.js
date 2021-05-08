import { useEffect } from 'react'
import { codeVerifier } from '../lib/pkce'

const { useAtom } = require('jotai')
const { tokenAtom, verifierAtom } = require('../api/state')
const { default: useAPI } = require('../api/useAPI')

const useAuth = () => {
  const [token] = useAtom(tokenAtom)
  const [verifier, setVerifier] = useAtom(verifierAtom)

  const { authAPI } = useAPI()

  useEffect(() => {
    if (!token && !verifier) {
      setVerifier(codeVerifier())
    }
  }, [setVerifier, token, verifier])

  useEffect(() => {
    if (!token && verifier) {
      authAPI.authorize(verifier)
    }
  })

  useEffect(() => {
    if (token) {
      setVerifier(null)
    }
  })

  return { token, verifier }
}
export default useAuth
