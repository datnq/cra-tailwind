import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import Icon from '../icon'
import { IconLogout } from '@tabler/icons'
import { IconButton, UnstyledButton } from '../button'
import Avatar from '../avatar/Avatar'
import Nav from './Nav'

const TwHeader = tw.header`
  bg-gray-200 row-span-2 sticky top-0
  flex-col flex h-screen
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
      <div tw='flex flex-grow justify-items-stretch py-4 flex-col'>
        <Nav />
        {/* <UploadManager /> */}
        <nav tw='flex items-center justify-end px-6 rounded-md'>
          <div tw='flex-grow flex'>
            <UnstyledButton type='button' tw='rounded-full'>
              <Avatar
                size='sm'
                src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
                role='button'
              />
            </UnstyledButton>
          </div>
          <IconButton tw='border-none shadow-none rounded-full bg-transparent hover:bg-commentary'>
            <Icon icon={IconLogout} size={16} />
          </IconButton>
        </nav>
      </div>
    </TwHeader>
  )
}

export default Header
