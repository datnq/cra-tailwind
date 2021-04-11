import tw from 'twin.macro'
import { forwardRef } from 'react'

const TwTextarea = tw.textarea`
  text-sm
  block px-3 py-2 bg-white focus:outline-none
  border rounded focus:border-indigo-500
`

export const TextArea = forwardRef(({ type, ...props }, ref) => {
  return <TwTextarea ref={ref} {...props} />
})

export default TextArea
