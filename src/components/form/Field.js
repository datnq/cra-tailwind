import styled from 'styled-components'
import tw from 'twin.macro'

export const Field = styled.div`
  ${tw`mb-4`}

  label {
    ${tw`block mb-2`}
  }
  input {
    ${tw`w-full`}
  }
`
export default Field
