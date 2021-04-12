import tw from 'twin.macro'
import { forwardRef } from 'react'

const TwInput = tw.input`
  text-sm
  inline-block px-3 py-2 bg-white focus:outline-none
  border rounded border-line focus:border-primary
  hover:border-lineDarker
`

const Input = forwardRef(({ type, ...props }, ref) => {
  return <TwInput type={type} {...props} ref={ref} />
})

export default Input
