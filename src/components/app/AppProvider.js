import { BrowserRouter } from 'react-router-dom'
import Modal, { ModalProvider, defaultModalOpts } from '../modal'
import { Provider } from 'jotai'

const AppProvider = props => {
  return (
    <Provider>
      <BrowserRouter>
        <ModalProvider options={defaultModalOpts} component={Modal}>
          {props.children}
        </ModalProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default AppProvider
