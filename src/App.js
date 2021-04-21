import { Route, Switch } from 'react-router'
import AppProvider from './components/app/AppProvider'
import Toasts from './components/toasts/Toasts'
import { routes } from './containers'

function App() {
  return (
    <AppProvider>
      <Switch>
        {routes.map(route => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
      <Toasts />
    </AppProvider>
  )
}

export default App
