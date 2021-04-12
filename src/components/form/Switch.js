import { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const Switcher = styled.div`
  ${tw`block relative ml-2 mr-3`}

  .dot {
    ${tw`block absolute w-6 h-6 bg-white rounded-full shadow -left-2 -top-1 transition`}
  }

  .back {
    content: '';
    ${tw`block w-9 h-4 bg-commentary rounded-full shadow-inner transition`}
  }
`

const SwitchInput = styled.input`
  ${tw`hidden`}

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
      <Switcher>
        <SwitchInput type='checkbox' {...props} ref={ref} />
        <span className='back' />
        <span className='dot' />
      </Switcher>
      <span tw='block'>{children}</span>
    </label>
  )
})

export default Switch
