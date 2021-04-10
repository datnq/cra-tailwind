import styled from 'styled-components'
import tw from 'twin.macro'

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
      <Header />
      <Main>{children}</Main>
    </TwLayout>
  )
}

export default Layout
