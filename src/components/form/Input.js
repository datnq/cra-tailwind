import { forwardRef } from 'react'
import { useField, splitFormProps } from 'react-form'
import tw from 'twin.macro'

const TwInput = tw.input`
  border-2 border-gray-200 rounded focus:border-primary focus:outline-none
  bg-gray-200 text-github
  py-2 px-3
`

export const Input = forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props)
  const { getInputProps } = useField(field, fieldOptions)
  return <TwInput {...getInputProps({ ref, ...rest })} />
})

export default Input
