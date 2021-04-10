import { forwardRef } from 'react'
import { useButton } from 'react-aria'

const Button = forwardRef((props, ref) => {
  let { buttonProps } = useButton(props, ref)
  let { children } = props

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  )
})
export default Button
