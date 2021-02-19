import { Redirect, Router } from '@reach/router'
import tw from 'twin.macro'
import Home from './containers/Home'
import Import from './containers/Import'
import Login from './containers/Login'

function App() {
  return (
    <Router css={tw`h-screen`}>
      <Login path='/login' />
      <Home path='/home' />
      <Import path='/import/*' />
      <Redirect from='/' to='/login' noThrow />
    </Router>
  )
}

export default App
