import { useEffect } from 'react'
import createPersistedState from 'use-persisted-state'
const useToken = createPersistedState('token')

const useAuth = config => {
  const [token, setToken] = useToken()

  return [token, setToken]
}

export default useAuth
