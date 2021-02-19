import { IconBell, IconLogout, IconSettings } from '@tabler/icons'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Inline } from '../components/layout'
import H1 from '../components/typography/H1'

const TwLayout = styled.div`
  ${tw`bg-gray-100
    grid auto-rows-auto grid-cols-layout grid-rows-layout
    h-screen
  `}
  min-width: 1024px;
`

const Header = tw.header`
  bg-white
  col-span-2
  p-4
  flex flex-row items-center justify-between
`

const Nav = tw.nav`
`

const Main = tw.main`
  flex-grow
`

const Layout = ({ children, title, ...rest }) => {
  return (
    <TwLayout {...rest}>
      <Header>
        <H1 tw='mb-0'>{title}</H1>
        <Inline>
          <a>
            <IconBell />
          </a>
          <a>
            <IconSettings />
          </a>
          <a>
            <IconLogout />
          </a>
        </Inline>
      </Header>
      <Main>{children}</Main>
    </TwLayout>
  )
}

export default Layout
