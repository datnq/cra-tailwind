import tw from 'twin.macro'
import { forwardRef } from 'react'
import Button from '../button'

const PrimaryButton = forwardRef((props, ref) => (
  <Button tw='w-24' primary {...props} ref={ref} />
))
const DefaultButton = forwardRef((props, ref) => (
  <Button tw='w-24' {...props} ref={ref} />
))

const defaultModalOpts = {
  defaultButton: DefaultButton,
  primaryButton: PrimaryButton,
}

export default defaultModalOpts
