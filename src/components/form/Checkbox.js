import { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const CheckboxInput = styled.input`
  ${tw`appearance-none outline-none cursor-pointer
    inline-block h-4 w-4 m-0 mr-2 mb-1
    relative
    border border-gray-300 rounded
    bg-white
  `}

  &::after {
    content: '';
    ${tw`
      block absolute left-1/2 top-1/2 w-1 h-2
      border-2 border-white border-t-0 border-l-0
      transform rotate-45 -translate-x-1/2 -translate-y-1/2
    `}
  }

  &:checked {
    ${tw`bg-indigo-500 border-indigo-500`}
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

const Checkbox = forwardRef(({ children, ...props }, ref) => {
  return (
    <label tw='flex items-center text-sm'>
      <CheckboxInput type='checkbox' {...props} ref={ref} />
      <span>{children}</span>
    </label>
  )
})

export default Checkbox
