import { Listbox } from '@headlessui/react'
import tw, { styled } from 'twin.macro'

export const Button = styled(Listbox.Button)`
  ${tw`flex items-center
    cursor-default w-full rounded
    text-sm
    border border-gray-200 bg-white px-3 py-2 text-left
    focus:outline-none focus:border-indigo-500
    hover:border-gray-400
    transition ease-in-out duration-150
  `}

  &:focus > svg {
    ${tw`text-primary stroke-current`}
  }
`

export const Options = tw(Listbox.Options)`
  absolute left-0 min-w-full
  bg-white rounded shadow-md
  focus:outline-none
  z-10
`

export const Option = Listbox.Option

export const ListItem = styled.div`
  ${tw`py-2 px-3 cursor-pointer hover:bg-gray-200 focus:outline-none text-sm`}

  ${props =>
    props.selected ? tw`bg-indigo-500 text-white hover:bg-indigo-600` : ''}
`
