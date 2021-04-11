import tw from 'twin.macro'
import { forwardRef } from 'react'

const TwInput = tw.input`
  text-sm
  inline-block px-3 py-2 bg-white focus:outline-none
  border rounded focus:border-indigo-500
`

const TwTextarea = tw.textarea`
  text-sm
  block px-3 py-2 bg-white focus:outline-none
  border rounded focus:border-indigo-500
`

export const Input = forwardRef(({ multiline, type, ...props }, ref) => {
  return multiline ? (
    <TwTextarea ref={ref} {...props} />
  ) : (
    <TwInput type={type} {...props} ref={ref} />
  )
})

export default Input
