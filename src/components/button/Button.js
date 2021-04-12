import tw, { styled } from 'twin.macro'

const Button = styled.button`
  ${tw`
    bg-gray-300 px-4 py-2 text-sm inline-flex mx-1 items-center align-middle
    hover:opacity-80
    focus:ring focus:outline-none focus:ring-gray-300 focus:ring-opacity-40
  `}

  ${props =>
    props.primary || props.type === 'submit' ? tw`bg-primary text-white` : ''}

  &:last-child {
    ${tw`mr-0`}
  }
  &:first-child {
    ${tw`ml-0`}
  }

  & > svg {
    ${tw`mx-2`}

    &:last-child {
      ${tw`mr-0`}
    }
    &:first-child {
      ${tw`ml-0`}
    }
  }
`

export default Button
