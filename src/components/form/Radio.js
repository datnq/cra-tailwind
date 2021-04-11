import { forwardRef } from 'react'

const Radio = forwardRef(({ children, ...props }, ref) => {
  return (
    <label>
      <input type='radio' {...props} ref={ref} />
    </label>
  )
})

export default Radio
