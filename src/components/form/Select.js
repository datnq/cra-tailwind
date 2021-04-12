import tw from 'twin.macro'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { IconChevronDown } from '@tabler/icons'
import { Listbox, Transition } from '@headlessui/react'

const SelectButton = tw(Listbox.Button)`
  flex items-center
  cursor-default w-full rounded
  text-sm
  border border-gray-300 bg-white px-3 py-2 text-left
  focus:outline-none focus:border-indigo-500
  transition ease-in-out duration-150
`

const Options = tw(Listbox.Options)`
  absolute left-0 w-full
  bg-white rounded shadow-md
  focus:outline-none
`
const Option = tw(Listbox.Option)`
  py-2 px-3
  cursor-pointer
  hover:bg-gray-200
  focus:outline-none
`

export const Select = forwardRef((props, ref) => {
  const [selected, setSelected] = useState()

  const selectedOption = props.options.find(o => o.value === selected)

  const select = data => {
    setSelected(data)
  }

  return (
    <Listbox value={selected} onChange={select}>
      <div tw='relative'>
        <SelectButton>
          <span tw='flex-grow'>
            {selectedOption ? selectedOption.text : props.placeHolder}
          </span>
          <IconChevronDown size={16} />
        </SelectButton>
        <Options>
          {props.options.map(option => (
            <Option key={option.key} value={option.value}>
              {option.text}
            </Option>
          ))}
        </Options>
      </div>
    </Listbox>
  )
})
