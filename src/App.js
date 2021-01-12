import { Router } from '@reach/router'
import useAuth from './components/app/useAuth'
import GithubAuth from './containers/GithubAuth'
import Home from './containers/Home'

function App() {
  const [token] = useAuth()
  return (
    <Router>
      <Home path='/' />
      <GithubAuth path='/auth/github' />
    </Router>
  )
}

export default App
