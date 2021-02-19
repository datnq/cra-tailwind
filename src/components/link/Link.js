import { forwardRef } from 'react'
import { useLink } from 'react-aria'
import tw from 'twin.macro'

const Link = forwardRef((props, ref) => {
  let { linkProps } = useLink(props, ref)

  return (
    <a
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
      tw='text-primary hover:underline'
    >
      {props.children}
    </a>
  )
})

export default Link
