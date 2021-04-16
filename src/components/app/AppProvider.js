import tw from 'twin.macro'
import { forwardRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import Button from '../button'
import { Modal } from '../modal/Modal'
import { ModalProvider } from '../modal/ModalProvider'

const queryClient = new QueryClient()

const PrimaryButton = forwardRef((props, ref) => (
  <Button tw='w-24' primary {...props} ref={ref} />
))
const DefaultButton = forwardRef((props, ref) => (
  <Button tw='w-24' {...props} ref={ref} />
))

const AppProvider = props => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ModalProvider
          options={{
            defaultButton: DefaultButton,
            primaryButton: PrimaryButton,
          }}
          component={Modal}
        >
          {props.children}
        </ModalProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default AppProvider
