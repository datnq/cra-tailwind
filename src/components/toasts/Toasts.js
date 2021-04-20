import tw, { styled } from 'twin.macro'
import { useToaster } from 'react-hot-toast'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import styledMap from 'styled-map'
import { variantIcons } from '../modal/Modal'

const ToastMessage = tw.div`
  shadow-xl bg-white py-4 px-6 rounded-lg flex border border-gray-200
  absolute w-80 -translate-x-1/2 transform
`

const Toasts = () => {
  const { visibleToasts, handlers } = useToaster()
  const { startPause, endPause } = handlers

  return (
    <div
      tw='fixed top-8 left-1/2 -translate-x-1/2 transform'
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {visibleToasts.map(toast => (
        <Transition
          key={toast.id}
          show={toast.visible}
          enter='transition-opacity'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <ToastMessage
            role={toast.role}
            aria-live={toast.ariaLive}
            type={toast.type}
          >
            {variantIcons[toast.type]}
            <div>{toast.message}</div>
          </ToastMessage>
        </Transition>
      ))}
    </div>
  )
}

export default Toasts
