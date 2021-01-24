import styled from 'styled-components'
import tw from 'twin.macro'

const Inline = styled.div`
  ${tw`flex flex-row`}

  & > * {
    ${props => (props.gap ? `margin-right: ${props.gap}` : '')}
  }

  & > :last-child {
    margin-right: 0;
  }
`

export default Inline
