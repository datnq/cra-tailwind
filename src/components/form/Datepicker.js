import tw, { styled } from 'twin.macro'
import useCalendar from 'react-use-calendar'
import { IconCalendar, IconChevronLeft, IconChevronRight } from '@tabler/icons'
import Button from '../button'
import { Listbox } from '@headlessui/react'
import { useState } from 'react'
import { format } from '../../lib/date'

const Day = styled.div`
  ${tw`
    py-1 px-2 cursor-pointer rounded text-right
    hover:bg-gray-200
  `}
  ${props => (props.isToday ? tw`text-indigo-500 font-bold` : '')}
  ${props => (!props.isSameMonth ? tw`text-gray-300` : '')}
  ${props =>
    props.selected ? tw`bg-indigo-500 text-white hover:bg-indigo-600` : ''}
`

const SelectButton = tw(Listbox.Button)`
  flex items-center
  cursor-default w-full rounded
  text-sm
  border border-gray-300 bg-white px-3 py-2 text-left
  focus:outline-none focus:border-indigo-500
  transition ease-in-out duration-150
`

const Options = tw(Listbox.Options)`
  absolute left-0 min-w-full p-2
  bg-white rounded shadow-md
  focus:outline-none
  border-collapse
  z-10
`

const Calendar = () => {
  const [state, actions] = useCalendar(new Date())

  return (
    <Options>
      <table tw='border-collapse'>
        <thead>
          <tr>
            <td colSpan={7} tw='p-2'>
              <div tw='flex items-center'>
                <strong tw='flex-grow'>
                  {state.month} - {state.year}
                </strong>
                <Button type='button' onClick={actions.getPrevMonth}>
                  <IconChevronLeft size={16} />
                </Button>
                <Button type='button' onClick={actions.getNextMonth}>
                  <IconChevronRight size={16} />
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            {state.days.map(day => (
              <th key={day} tw='text-right py-1 px-2 text-sm'>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state.weeks.map((week, index) => (
            <tr key={index}>
              {week.map(day => (
                <Listbox.Option value={day.date} as='td' key={day.dayOfMonth}>
                  {({ selected }) => (
                    <Day {...day} selected={selected}>
                      {day.dayOfMonth}
                    </Day>
                  )}
                </Listbox.Option>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Options>
  )
}

const Datepicker = () => {
  const [selected, setSelected] = useState()

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div tw='relative'>
        <SelectButton>
          <span tw='flex-grow'>{selected && format(selected)}</span>
          <IconCalendar size={16} />
        </SelectButton>
        <Calendar />
      </div>
    </Listbox>
  )
}

export default Datepicker
