import tw, { styled } from 'twin.macro'
import { useToaster } from 'react-hot-toast'
import { Transition } from '@headlessui/react'
import { variantIcons } from '../icon'
import styledMap from 'styled-map'

const ToastMessage = styled.div`
  ${styledMap('type', {
    success: tw`ring-positive`,
    error: tw`ring-negative`,
    default: tw`ring-primary`
  })}

  ${tw`py-4 px-6 rounded-md flex items-center max-w-sm
    shadow-xl bg-white ring-opacity-10 ring-4 text-sm
  `}
`

const Toasts = () => {
  const { visibleToasts, handlers } = useToaster()
  const { startPause, endPause } = handlers

  return (
    <div
      tw='fixed top-8 left-1/2 -translate-x-1/2 transform max-w-sm w-full z-20'
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
            <div tw='line-clamp-3 flex-grow'>{toast.message}</div>
          </ToastMessage>
        </Transition>
      ))}
    </div>
  )
}

export default Toasts
