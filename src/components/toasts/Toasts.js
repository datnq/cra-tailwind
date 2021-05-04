import tw, { styled } from 'twin.macro'
import { useToaster } from 'react-hot-toast'
import { variantIcons } from '../icon'
import styledMap from 'styled-map'

const ToastMessage = styled.div`
  ${tw`transition-all ease-in-out duration-300
    py-4 px-6 rounded-md flex items-center max-w-sm
    shadow-xl bg-white ring-4 text-sm border
    absolute w-full
  `}
  
  ${styledMap('type', {
    success: tw`ring-positive border-positive`,
    error: tw`ring-negative border-negative`,
    default: tw`ring-primary border-primary`,
  })}

  ${styledMap({
    visible: tw`opacity-100`,
    default: tw`opacity-0`
  })}

  ${tw`ring-opacity-10 border-opacity-40`}
`

const Toasts = () => {
  const { handlers, toasts } = useToaster()
  const { startPause, endPause, calculateOffset } = handlers

  return (
    <div
      tw='transition-transform fixed top-8 left-1/2 -translate-x-1/2 transform max-w-sm w-full z-20'
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts.reverse().map((toast) => {
        const offset = calculateOffset(toast.id, {
          reverseOrder: true,
          margin: 16,
        })

        return (
          <ToastMessage
            key={toast.id}
            role={toast.role}
            aria-live={toast.ariaLive}
            type={toast.type}
            style={{ transform: `translateY(${offset}px)` }}
            visible={toast.visible}
          >
            {variantIcons[toast.type]}
            <div tw='line-clamp-3 flex-grow'>{toast.message}</div>
          </ToastMessage>
        )
      })}
    </div>
  )
}

export default Toasts
