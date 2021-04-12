import { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const RadioInput = styled.input`
  ${tw`appearance-none outline-none cursor-pointer
    inline-block h-4 w-4 m-0 mr-2 mb-px
    relative
    border border-gray-300 rounded-full
    bg-white
  `}

  &::after {
    content: '';
    ${tw`
      block absolute left-1/2 top-1/2 w-2 h-2
      bg-primary rounded-full
      transform -translate-x-1/2 -translate-y-1/2
      opacity-0
    `}
  }

  &:checked {
    ${tw`bg-white border-primary`}
  }
  &:checked::after {
    ${tw`opacity-100`}
  }

  &:disabled {
    ${tw`cursor-not-allowed bg-white border-gray-300`}
  }
  &:disabled:checked {
    ${tw`bg-gray-300`}
  }

  & + span {
    ${tw`inline-block`}
  }
`

const Radio = forwardRef(({ children, ...props }, ref) => {
  return (
    <label tw='flex items-center text-sm cursor-pointer'>
      <RadioInput type='radio' {...props} ref={ref} />
      <span>{children}</span>
    </label>
  )
})

export default Radio
