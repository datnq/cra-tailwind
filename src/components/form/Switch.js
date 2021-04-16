import { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const SwitchInput = styled.input`
  &:checked ~ .back {
    ${tw`bg-primary`}
  }
  &:checked ~ .dot {
    ${tw`transform translate-x-full`}
  }
`

const Switch = forwardRef(({ children, ...props }, ref) => {
  return (
    <label tw='flex items-center text-sm cursor-pointer'>
      <div tw='block relative ml-2 mr-3'>
        <SwitchInput tw='hidden' type='checkbox' {...props} ref={ref} />
        <span
          className='back'
          tw='block w-9 h-4 bg-commentary rounded-full shadow-inner transition-colors'
        />
        <span
          className='dot'
          tw='block absolute w-6 h-6 bg-white rounded-full shadow -left-2 -top-1 transition-transform'
        />
      </div>
      <span tw='block'>{children}</span>
    </label>
  )
})

export default Switch
