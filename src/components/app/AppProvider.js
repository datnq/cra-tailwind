import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Switch } from 'react-router-dom'

const queryClient = new QueryClient()

const AppProvider = props => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{props.children}</BrowserRouter>
    </QueryClientProvider>
  )
}

export default AppProvider
