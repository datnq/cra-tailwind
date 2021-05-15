import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { tokenAtom, userAtom } from '../api/state'
import useAuth from '../hooks/useAuth'

const AuthCallback = () => {
  const { isAutheticated, token: getToken, me: getUser } = useAuth()

  const [token, setToken] = useAtom(tokenAtom)
  const [user, setUser] = useAtom(userAtom)

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
    if (token && !user) {
      getUser().then(setUser)
    }
  }, [getUser, history, setUser, token, user])

  useEffect(() => {
    if (token && user) {
      history.push('/')
    }
  }, [history, token, user])

  return null
}
export default AuthCallback
