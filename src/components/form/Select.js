import tw from 'twin.macro'
import { forwardRef } from 'react'
import { IconChevronDown } from '@tabler/icons'
import { Listbox } from '@headlessui/react'
import { Button, Options, Option, ListItem } from './ListBox'
import Icon from '../icon'

const Select = forwardRef(({value, onChange, ...props}, ref) => {
  const selectedOption = props.options.find(o => o.value === value)

  return (
    <Listbox value={value} onChange={onChange}>
      <div tw='relative'>
        <Button>
          <span tw='block flex-grow'>
            {selectedOption ? selectedOption.text : props.placeHolder}
          </span>
          <Icon icon={IconChevronDown} />
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

export default Select