import { forwardRef } from 'react'
import { useTextField } from 'react-aria'
import tw from 'twin.macro'

const TwInput = tw.input`
  border-2 border-gray-200 rounded focus:border-primary focus:outline-none
  bg-gray-200 text-github
  py-2 px-3
`

export const Input = forwardRef((props, ref) => {
  let { inputProps } = useTextField(props, ref)
  return <TwInput {...inputProps} ref={ref} />
})

export default Input
