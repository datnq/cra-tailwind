import tw, { styled } from 'twin.macro'

const Button = styled.button`
  ${tw`
    px-4 py-2 text-sm inline-flex mx-1 items-center justify-center rounded-md shadow-sm text-body
    border border-line bg-white
    transition-colors hover:bg-gray-50
    focus:ring focus:outline-none focus:ring-commentary focus:ring-opacity-40
    select-none
    first:ml-0 last:mr-0
  `}
  -webkit-tap-highlight-color: transparent;

  ${props =>
    props.primary || props.type === 'submit'
      ? tw`bg-primary text-white hover:bg-indigo-600 focus:ring-primary focus:ring-opacity-40`
      : ''}

  & > svg {
    ${tw`mx-2 first:ml-0 last:mr-0`}
  }
`

export default Button
