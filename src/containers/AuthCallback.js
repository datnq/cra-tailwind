import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { tokenAtom } from '../api/state'
import useAuth from '../hooks/useAuth'

const AuthCallback = () => {
  const { isAutheticated, token: getToken } = useAuth()

  const [token, setToken] = useAtom(tokenAtom)

  const history = useHistory()

  useEffect(() => {
    if (!isAutheticated()) {
      getToken().then(response => {
        if (response.access_token) setToken(response)
        else console.log(response)
      })
    }
  }, [getToken, isAutheticated, setToken])

  useEffect(() => {
    if (token) {
      history.push('/')
    }
  }, [history, token])

  return null
}
export default AuthCallback
