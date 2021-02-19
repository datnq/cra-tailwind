import styled from 'styled-components'
import styledMap from 'styled-map'
import tw from 'twin.macro'
import Button from '../button'

const ImportButton = styled(Button)`
  ${tw`shadow-lg flex-col flex-grow p-8 mx-4 bg-white`}
  ${styledMap('color', {
    github: tw`text-github hover:text-white hover:bg-github`,
    jira: tw`text-jira hover:text-white hover:bg-jira`,
    gitlab: tw`text-gitlab hover:text-white hover:bg-gitlab`,
    default: tw`text-primary hover:text-white hover:bg-primary`,
  })}

  & > svg {
    ${tw`mb-3 mt-1 mr-0 w-36`}
  }
`

export default ImportButton
