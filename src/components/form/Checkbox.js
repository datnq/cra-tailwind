import { forwardRef } from 'react'

const Checkbox = forwardRef(({ children, ...props }, ref) => {
  return (
    <label>
      <input type='checkbox' {...props} ref={ref} /> {children}
    </label>
  )
})

export default Checkbox
