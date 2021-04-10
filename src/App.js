import { Route, Switch } from 'react-router'
import AppProvider from './components/app/AppProvider'
import Home from './containers/Home'

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </AppProvider>
  )
}

export default App
