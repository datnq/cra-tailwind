import { useRef } from 'react'
import { useButton } from 'react-aria'

function Button(props) {
  let ref = useRef()
  let { buttonProps } = useButton(props, ref)
  let { children } = props

  return (
    <button
      {...buttonProps}
      ref={ref}
      className='px-3 py-1 ring-4 bg-blue-500 ring-blue-500 ring-opacity-30 rounded text-white font-bold'
    >
      {children}
    </button>
  )
}
export default Button
