import { Route, Switch } from 'react-router'
import AppProvider from './components/app/AppProvider'
import Toasts from './components/toasts/Toasts'
import AuthCallback from './containers/AuthCallback'
import PrivateRoute from './containers/PrivateRoute'

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path='/' exact component={PrivateRoute} />
        <Route path='/auth/callback' component={AuthCallback} />
      </Switch>
      <Toasts />
    </AppProvider>
  )
}

export default App
