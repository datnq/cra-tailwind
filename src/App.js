import { Router } from '@reach/router'
import GithubAuth from './containers/GithubAuth'
import Home from './containers/Home'

function App() {
  return (
    <Router>
      <Home path='/' />
      <GithubAuth path='/auth/github' />
    </Router>
  )
}

export default App
