import tw from 'twin.macro'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { IconChevronDown } from '@tabler/icons'
import { Listbox, Transition } from '@headlessui/react'
import { Button, Options, Option, ListItem } from './ListBox'

export const Select = forwardRef((props, ref) => {
  const [selected, setSelected] = useState()

  const selectedOption = props.options.find(o => o.value === selected)

  const select = data => {
    setSelected(data)
  }

  return (
    <Listbox value={selected} onChange={select}>
      <div tw='relative'>
        <Button>
          <span tw='block flex-grow'>
            {selectedOption ? selectedOption.text : props.placeHolder}
          </span>
          <IconChevronDown size={16} />
        </Button>
        <Options>
          {props.options.map(option => (
            <Option key={option.key} value={option.value}>
              {({ selected }) => (
                <ListItem selected={selected}>{option.text}</ListItem>
              )}
            </Option>
          ))}
        </Options>
      </div>
    </Listbox>
  )
})
