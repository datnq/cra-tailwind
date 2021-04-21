import {
  IconBriefcase,
  IconCalendar,
  IconCheck,
  IconCurrencyDollar,
  IconLink,
  IconLocation,
  IconPencil,
} from '@tabler/icons'
import tw from 'twin.macro'
import Button from '../button'
import Icon from '../icon'

export const PageTitle = tw.h2`text-xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate`

const PageHeader = ({ title, children }) => {
  return (
    <header className='lg:flex lg:items-center lg:justify-between px-8 mt-8'>
      <div className='flex-1 min-w-0'>
        <PageTitle>{title}</PageTitle>
      </div>
      <nav className='mt-5 flex lg:mt-0 lg:ml-4'>
        {children}
      </nav>
    </header>
  )
}

export default PageHeader
