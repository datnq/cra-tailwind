import { useContext } from 'react'
import { ModalContext } from './ModalProvider'

const useModal = (options = {}) => {
  const [modal, dispatch] = useContext(ModalContext)

  const get = (key) => key ? modal[key] : modal

  const show = (data = {}) => {
    dispatch({ type: 'show', payload: { ...options, ...data } })
  }

  const hide = () => {
    dispatch({ type: 'hide' })
  }

  return { get, show, hide }
}

export default useModal
