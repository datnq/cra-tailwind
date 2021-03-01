import { Redirect, Router } from '@reach/router'
import { useAtom } from 'jotai'
import tw from 'twin.macro'
import { tokenAtom } from './api/auth'
import AppProvider from './components/app/AppProvider'
import { AuthCodeForm } from './components/loginForm'
import Home from './containers/Home'
import Import from './containers/Import'
import Login from './containers/Login'

function App() {
  const [token] = useAtom(tokenAtom)

  return (
    <AppProvider>
      {!token ? (
        <Router css={tw`h-screen`}>
          <Login path='/login' />
          <AuthCodeForm path='/auth/token' />
          <Redirect from='/*' to='/login' />
        </Router>
      ) : (
        <Router css={tw`h-screen`}>
          <Home path='/' />
          <Import path='/import/*' />
          <Redirect from='/login' to='/' noThrow />
        </Router>
      )}
    </AppProvider>
  )
}

export default App
