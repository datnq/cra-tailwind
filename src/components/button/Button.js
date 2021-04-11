import { forwardRef } from 'react'

const Button = forwardRef((props, ref) => {
  let { children } = props

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  )
})
export default Button
