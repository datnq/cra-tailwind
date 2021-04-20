import { Route, Switch } from 'react-router'
import { Toaster } from 'react-hot-toast';
import AppProvider from './components/app/AppProvider'
import Home from './containers/Home'
import Toasts from './components/toasts';

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
