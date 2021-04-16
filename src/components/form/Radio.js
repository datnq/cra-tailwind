import { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const RadioInput = styled.input`
  ${tw`appearance-none outline-none cursor-pointer
    inline-block h-4 w-4
    border-2 border-line rounded-full bg-white 
    checked:bg-white checked:border-primary
    disabled:cursor-not-allowed disabled:bg-white disabled:border-line
    checked:disabled:bg-line
  `}

  &:checked ~ .dot {
    ${tw`opacity-100`}
  }
`

const Dot = tw.span`
  block absolute left-1/2 top-1/2 w-2 h-2
  bg-primary rounded-full
  transform -translate-x-1/2 -translate-y-1/2
  opacity-0
  transition-opacity
`

const Radio = forwardRef(({ children, ...props }, ref) => {
  return (
    <label tw='flex items-center text-sm cursor-pointer'>
      <span tw='flex m-0 mr-2 mb-px relative'>
        <RadioInput type='radio' {...props} ref={ref} />
        <Dot className='dot' />
      </span>
      <span tw='block'>{children}</span>
    </label>
  )
})

export default Radio
