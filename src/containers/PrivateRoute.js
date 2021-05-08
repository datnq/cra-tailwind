import { Suspense, useEffect } from 'react'
import { Route } from 'react-router'
import useAuth from '../hooks/useAuth'
import routes from './routes'

const PrivateRoute = () => {
  const { token } = useAuth()

  return (
    <>
      {token &&
        routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
    </>
  )
}

const SuspensedPrivateRoute = () => (
  <Suspense fallback={<div>Authorizing...</div>}>
    <PrivateRoute />
  </Suspense>
)

export default SuspensedPrivateRoute