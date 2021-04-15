import { createContext, useReducer } from 'react'

export const ModalContext = createContext()

const modalReducer = (modal, action) => {
  switch (action.type) {
    case 'show': {
      return { ...modal, show: true, ...action.payload }
    }
    case 'hide': {
      return {
        ...modal,
        show: false,
        title: undefined,
        content: undefined,
        footer: undefined,
        variant: undefined,
      }
    }
    default:
  }

  return modal
}

export const ModalProvider = ({
  component: ModalComponent,
  children,
  options = {},
}) => {
  const [modal, dispatch] = useReducer(modalReducer, options)

  const close = () => {
    dispatch({ type: 'hide' })
  }

  return (
    <ModalContext.Provider value={[modal, dispatch]}>
      {children}
      <ModalComponent onClose={close} />
    </ModalContext.Provider>
  )
}
