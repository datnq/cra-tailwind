import tw, { styled } from 'twin.macro'

const Button = styled.button`
  ${tw`
    bg-commentary px-4 py-2 text-sm inline-flex mx-1 items-center justify-center rounded
    hover:opacity-80
    focus:ring focus:outline-none focus:ring-commentary focus:ring-opacity-40
    select-none
  `}
  -webkit-tap-highlight-color: transparent;

  ${props =>
    props.primary || props.type === 'submit'
      ? tw`bg-primary text-white focus:ring-primary focus:ring-opacity-40`
      : ''}

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
