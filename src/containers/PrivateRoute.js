import { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import useAutheticated from '../hooks/useAutheticated'
import routes from './routes'

const PrivateRoute = () => {
  useAutheticated(auth => auth.authorize())

  return (
    <Switch>
      {routes.map(route => (
        <Route key={route.name} path={route.path} exact={!!route.exact}>
          {route.children}
        </Route>
      ))}
    </Switch>
  )
}

const SuspensedPrivateRoute = () => (
  <Suspense fallback={<div>Authorizing...</div>}>
    <PrivateRoute />
  </Suspense>
)

export default SuspensedPrivateRoute
