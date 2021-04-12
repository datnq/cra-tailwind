import tw, { styled } from 'twin.macro'
import useCalendar from 'react-use-calendar'
import { IconCalendar, IconChevronLeft, IconChevronRight } from '@tabler/icons'
import Button from '../button'
import { Listbox } from '@headlessui/react'
import { forwardRef, useState } from 'react'
import { format } from '../../lib/date'
import { Button as SelectButton, Options, Option, ListItem } from './ListBox'

const Day = styled(ListItem)`
  ${tw`w-8 h-8 p-0 rounded-full text-right flex items-center justify-center`}
  ${props => (props.isToday ? tw`text-primary font-bold` : '')}
  ${props => (!props.isSameMonth ? tw`text-gray-300` : '')}
`

const Calendar = () => {
  const [state, actions] = useCalendar(new Date())

  return (
    <Options tw='p-2 min-w-min'>
      <table tw='border-collapse'>
        <thead>
          <tr>
            <td colSpan={7} tw='p-2'>
              <div tw='flex items-center'>
                <strong tw='flex-grow'>
                  {state.month} - {state.year}
                </strong>
                <Button type='button' onClick={actions.getPrevMonth} tw='px-2'>
                  <IconChevronLeft size={16} />
                </Button>
                <Button type='button' onClick={actions.getNextMonth} tw='px-2'>
                  <IconChevronRight size={16} />
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            {state.days.map(day => (
              <th key={day} tw='text-center py-1 px-2 text-sm'>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state.weeks.map((week, index) => (
            <tr key={index}>
              {week.map(day => (
                <Option value={day.date} as='td' key={day.dayOfMonth}>
                  {({ selected }) => (
                    <Day {...day} selected={selected}>
                      {day.dayOfMonth}
                    </Day>
                  )}
                </Option>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Options>
  )
}

const Datepicker = forwardRef(({ value, onChange }, ref) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div tw='relative'>
        <SelectButton>
          <span tw='block flex-grow'>{value && format(value)}</span>
          <IconCalendar size={16} />
        </SelectButton>
        <Calendar />
      </div>
    </Listbox>
  )
})

export default Datepicker
