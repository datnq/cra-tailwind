import tw, {styled} from "twin.macro";

const HeaderCell = styled.th`
  ${tw`px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider`}
  ${props => props.sticky ? tw`sticky top-0` : ''}
`
export default HeaderCell