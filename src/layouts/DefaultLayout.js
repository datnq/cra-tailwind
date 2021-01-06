import tw from 'twin.macro'

const TwLayout = tw.div`
  bg-gray-100
  flex flex-row
  h-screen
`

const Nav = tw.nav`
  flex-shrink-0
  w-40
`

const Main = tw.main`
  flex-grow
`

const Layout = ({ children, ...rest }) => {
  return (
    <TwLayout {...rest}>
      <Nav>Nav</Nav>
      <Main>{children}</Main>
    </TwLayout>
  )
}

export default Layout
