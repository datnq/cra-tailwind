import { Router } from '@reach/router'
import tw from 'twin.macro'
import useAuth from './components/app/useAuth'
import GithubAuth from './containers/GithubAuth'
import Home from './containers/Home'
import Login from './containers/Login'

function App() {
  const [token] = useAuth()
  return (
    <Router css={tw`h-screen`}>
      {token ? (
        <>
          <Home path='/' />
          <GithubAuth path='/auth/github' />
        </>
      ) : (
        <Login path='/' />
      )}
    </Router>
  )
}

export default App
