import tw from 'twin.macro'
import { createContext, forwardRef, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Button from '../button'
import Modal, { ModalProvider } from '../modal'

const queryClient = new QueryClient()

const PrimaryButton = forwardRef((props, ref) => (
  <Button tw='w-24' primary {...props} ref={ref} />
))
const DefaultButton = forwardRef((props, ref) => (
  <Button tw='w-24' {...props} ref={ref} />
))

const modalOpts = {
  defaultButton: DefaultButton,
  primaryButton: PrimaryButton,
}

export const AppContext = createContext()

const AppProvider = props => {
  const [uploadQueue, setUploadQueue] = useState([])
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ uploadQueue, setUploadQueue }}>
        <BrowserRouter>
          <ModalProvider options={modalOpts} component={Modal}>
            {props.children}
          </ModalProvider>
        </BrowserRouter>
      </AppContext.Provider>
    </QueryClientProvider>
  )
}

export default AppProvider
