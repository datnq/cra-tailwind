import { useRef } from 'react'
import { useButton } from 'react-aria'
import tw from 'twin.macro'

const TwButton = tw.button`
  px-3 py-1 bg-blue-400 rounded text-white font-bold
  hover:bg-blue-500
`

function Button(props) {
  let ref = useRef()
  let { buttonProps } = useButton(props, ref)
  let { children } = props

  return (
    <TwButton {...buttonProps} ref={ref}>
      {children}
    </TwButton>
  )
}
export default Button
