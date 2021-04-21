import tw from 'twin.macro'
import { forwardRef } from 'react'

const UnstyledIcon = forwardRef(({ icon: Component, size = 16, ...props }, ref) => (
  <Component
    aria-hidden='true'
    size={size}
    {...props}
    ref={ref}
  />
))

const Icon = tw(UnstyledIcon)`stroke-current flex-shrink-0`

export default Icon
