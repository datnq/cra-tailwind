import clsx from 'clsx'
import { useRef } from 'react'
import { useModal } from './useModal'

export const useDialog = () => {
  const modal = useModal()

  const DefaultButton = modal.get('defaultButton')
  const PrimaryButton = modal.get('primaryButton')

  const awaitingRef = useRef()

  const dialog = data => {
    modal.show(data)
    return new Promise(resolve => {
      awaitingRef.current = { resolve }
    })
  }

  const handleOk = close => async () => {
    awaitingRef.current && (await awaitingRef.current.resolve(true))
    close()
  }
  const handleCancel = close => async () => {
    awaitingRef.current && (await awaitingRef.current.resolve(false))
    close()
  }

  const alert = (message, options = {}) => {
    const { okLabel = 'OK', okClassName, ...opts } = options

    return dialog({
      ...opts,
      content: message,
      footer: (close, focusRef) => (
        <PrimaryButton
          className={clsx(okClassName)}
          onClick={handleOk(close)}
          ref={focusRef}
        >
          {okLabel}
        </PrimaryButton>
      ),
    })
  }

  const confirm = (message, options = {}) => {
    const {
      okLabel = 'OK',
      cancelLabel = 'Cancel',
      okClassName,
      cancelClassName,
      ...opts
    } = options

    return dialog({
      ...opts,
      content: message,
      footer: (close, focusRef) => (
        <>
          <PrimaryButton
            className={clsx(okClassName)}
            onClick={handleOk(close)}
            ref={focusRef}
          >
            {okLabel}
          </PrimaryButton>
          <DefaultButton
            className={clsx(cancelClassName)}
            onClick={handleCancel(close)}
          >
            {cancelLabel}
          </DefaultButton>
        </>
      ),
    })
  }

  return { confirm, alert }
}
