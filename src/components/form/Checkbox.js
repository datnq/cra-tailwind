import { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const CheckboxInput = tw.input`
  appearance-none outline-none cursor-pointer
  h-4 w-4 border-2 rounded inline-block
  border-line bg-white transition-colors
  checked:bg-primary checked:border-primary
  disabled:cursor-not-allowed disabled:bg-white disabled:border-line
  checked:disabled:bg-line
`

const Checkmark = tw.span`
  block absolute left-1/2 top-1/2 w-1 h-2
  border-2 border-white border-t-0 border-l-0
  transform rotate-45 -translate-x-1/2 -translate-y-1/2
`

const Checkbox = forwardRef(({ children, ...props }, ref) => {
  return (
    <label tw='flex items-center text-sm cursor-pointer'>
      <span tw='mr-2 mb-1 inline-flex relative'>
        <CheckboxInput type='checkbox' {...props} ref={ref} />
        <Checkmark />
      </span>
      <span tw='block'>{children}</span>
    </label>
  )
})

export default Checkbox
