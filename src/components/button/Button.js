import tw, { styled } from 'twin.macro'

const Button = styled.button`
  ${tw`bg-gray-300 px-3 py-2 text-sm inline-flex mx-1`}

  &:last-child {
    ${tw`mr-0`}
  }
  &:first-child {
    ${tw`ml-0`}
  }
`

export default Button
