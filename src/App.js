import { Suspense } from 'react'
import { Route, Switch } from 'react-router'
import AppProvider from './components/app/AppProvider'
import Toasts from './components/toasts/Toasts'
import AuthCallback from './containers/AuthCallback'
import PrivateRoute from './containers/PrivateRoute'

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path='/' component={PrivateRoute} />
        <Route path='/auth/callback' exact component={AuthCallback} />
      </Switch>
      <Toasts />
    </AppProvider>
  )
}

export default App
