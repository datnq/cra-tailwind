import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { tokenAtom, verifierAtom } from '../api/state'
import useAPI from '../api/useAPI'
import useQuery from '../hooks/useQuery'

const AuthCallback = () => {
  const query = useQuery()
  const code = query.get('code')

  const [token, setToken] = useAtom(tokenAtom)
  const [verifier] = useAtom(verifierAtom)
  const { authAPI } = useAPI()
  
  const history = useHistory()
  console.log(code, verifier)

  useEffect(() => {
    if (code && verifier) {
      authAPI.token(code, verifier).then(data => {
        setToken(data)
      })
    }
  }, [authAPI, code, setToken, verifier])

  useEffect(() => {
    if (token) {
      history.push('/')
    }
  }, [history, token])

  return null
}
export default AuthCallback
