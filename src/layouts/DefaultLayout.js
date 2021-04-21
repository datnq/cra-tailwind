import styled from 'styled-components'
import tw from 'twin.macro'
import { Footer, Header, Nav } from '../components/layout'

const TwLayout = styled.div`
  ${tw`bg-gray-100
    grid auto-rows-auto grid-cols-layout grid-rows-layout
    min-h-screen
  `}
`

const Main = tw.main`
  flex-grow flex flex-col
`

const Layout = ({ children, title, ...rest }) => {
  return (
    <TwLayout {...rest}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </TwLayout>
  )
}

export default Layout
