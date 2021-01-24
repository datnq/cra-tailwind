import { useRef } from 'react'
import { useButton } from 'react-aria'
import styled from 'styled-components'
import tw from 'twin.macro'

const TwButton = styled.button`
  ${tw`px-4 py-2 bg-indigo-500 rounded text-white font-bold
    hover:bg-indigo-600
    flex justify-center
  `}
  & > svg {
    ${tw`mr-2`}
  }
`

function Button(props) {
  let ref = useRef()
  let { buttonProps } = useButton(props, ref)
  let { children, className } = props

  return (
    <TwButton {...buttonProps} className={className} ref={ref}>
      {children}
    </TwButton>
  )
}
export default Button
