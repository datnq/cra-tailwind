import tw from 'twin.macro'
import { forwardRef } from 'react'

const TwInput = tw.input`
  text-sm
  inline-block px-3 py-2 bg-white focus:outline-none
  border rounded focus:border-indigo-500
  hover:border-gray-400
`

export const Input = forwardRef(({ type, ...props }, ref) => {
  return <TwInput type={type} {...props} ref={ref} />
})

export default Input
