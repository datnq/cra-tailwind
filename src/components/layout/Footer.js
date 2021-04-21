import tw from 'twin.macro'
import Link from '../link'

const TwFooter = tw.footer`
  p-4 px-8 text-sm text-gray-500
  flex flex-row items-center justify-between
`
const Footer = () => {
  return (
    <TwFooter>
      <div>
        &copy; 2021 Joey Nguyen. All right reserved. Licence{' '}
        <Link href='https://opensource.org/licenses/MIT'>MIT</Link>
      </div>
    </TwFooter>
  )
}

export default Footer
