import { useEffect } from 'react'
import createPersistedState from 'use-persisted-state'
import { GetTokenForm } from '../../components/github'

const useGithubToken = createPersistedState('githubToken')

const Github = () => {
  const [token, setToken] = useGithubToken()

  useEffect(() => {
    localStorage.setItem('now', {})
  }, [token])

  return !token ? <GetTokenForm onToken={setToken} /> : token
}

export default Github
