import { useEffect } from 'react'
import createPersistedState from 'use-persisted-state'
const useToken = createPersistedState('token')

const useAuth = config => {
  const token = useToken()

  return [token]
}

export default useAuth
