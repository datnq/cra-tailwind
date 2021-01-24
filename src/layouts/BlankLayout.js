import tw from 'twin.macro'
import Centerized from '../components/centerized'

const BlankLayout = props => {
  return <Centerized css={tw`bg-gray-200`}>{props.children}</Centerized>
}

export default BlankLayout
