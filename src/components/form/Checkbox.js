import { useRef } from 'react'
import { useCheckbox } from 'react-aria'
import { useToggleState } from 'react-stately'

const Checkbox = props => {
  let { children } = props
  let state = useToggleState(props)
  let ref = useRef()
  let { inputProps } = useCheckbox(props, state, ref)

  return (
    <label>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  )
}

export default Checkbox
