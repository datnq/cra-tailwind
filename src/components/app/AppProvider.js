import { createContext } from 'react'
import createPersistedState from 'use-persisted-state'
import config from './config'
import useAuth from './useAuth'

const useProvider = createPersistedState('provider')
export const AppContext = createContext()

const AppProvider = props => {
  const [provider, setProvider] = useProvider()
  const conf = config[provider]
  const [token] = useAuth(conf)
  return (
    <AppContext.Provider value={{ config: conf, provider, token }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
