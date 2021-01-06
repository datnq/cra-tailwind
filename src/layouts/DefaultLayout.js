import styled from 'styled-components'
import tw from 'twin.macro'

const TwLayout = tw.div`
bg-gray-100
  grid auto-rows-auto grid-cols-layout grid-rows-layout
  h-screen
`

const Header = tw.header`
  bg-white
  col-span-2
`

const Nav = tw.nav`
`

const Main = tw.main`
  flex-grow
`

const Layout = ({ children, ...rest }) => {
  return (
    <TwLayout {...rest}>
      <Header>Header</Header>
      <Nav>Nav</Nav>
      <Main>{children}</Main>
    </TwLayout>
  )
}

export default Layout
