import tw from 'twin.macro'
import { forwardRef } from 'react'
import { useCheckbox } from 'react-aria'
import { useToggleState } from 'react-stately'

const Checkbox = forwardRef((props, ref) => {
  let { children } = props
  let state = useToggleState(props)
  let { inputProps } = useCheckbox(props, state, ref)

  return (
    <label tw='block'>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  )
})

export default Checkbox
