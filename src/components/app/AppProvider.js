import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const AppProvider = props => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}

export default AppProvider
