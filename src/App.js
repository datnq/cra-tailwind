import { Route, Switch } from 'react-router'
import AppProvider from './components/app/AppProvider'
import Home from './containers/Home'
import Toasts from './components/toasts/Toasts';

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Toasts />
    </AppProvider>
  )
}

export default App
