import styled from 'styled-components'
import styledMap from 'styled-map'
import tw from 'twin.macro'

const Inline = styled.div`
  ${tw`flex flex-row`}

  & > * {
    ${'' /* ${props => (props.gap ? tw`mr-${props.gap}` : '')} */}
    ${styledMap('gap', {
      0: tw`mr-0`,
      sm: tw`mr-2`,
      lg: tw`mr-8`,
      default: tw`mr-4`,
    })}
  }

  & > :last-child {
    ${tw`mr-0`}
  }
`

export default Inline
