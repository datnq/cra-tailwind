import { Link } from 'react-router-dom'
import { Input } from '../form'
import tw from 'twin.macro'
import Icon from '../icon'
import { IconBell, IconLogout } from '@tabler/icons'
import { IconButton, UnstyledButton } from '../button'
import Avatar from '../avatar/Avatar'
import Nav from './Nav'

const TwHeader = tw.header`
  bg-white row-span-2 sticky top-0
  flex-col flex h-screen rounded-r-2xl
`

const Header = () => {
  return (
    <TwHeader>
      <div tw='flex items-center p-4 my-4'>
        <Link to='/' tw='inline-block'>
          <h1 tw='font-black uppercase text-2xl leading-9'>
            <span tw='text-body'>TW</span>
            <span tw='text-primary'>ADMIN</span>
          </h1>
        </Link>
      </div>
      <div tw='flex flex-grow justify-items-stretch p-4 flex-col'>
        <div>
          <Input
            type='search'
            tw='w-full rounded-full'
            placeholder='Search...'
          />
        </div>
        <Nav />
        <nav tw='flex items-center justify-end'>
          <span tw='flex-grow'>
            <UnstyledButton type='button' tw='rounded-full'>
              <Avatar
                src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                role='button'
              />
            </UnstyledButton>
          </span>
          <IconButton tw='border-none shadow-none rounded-full bg-transparent hover:bg-commentary'>
            <Icon icon={IconBell} size={24} />
          </IconButton>
          <IconButton tw='border-none shadow-none rounded-full bg-transparent hover:bg-commentary'>
            <Icon icon={IconLogout} size={24} />
          </IconButton>
        </nav>
      </div>
    </TwHeader>
  )
}

export default Header
