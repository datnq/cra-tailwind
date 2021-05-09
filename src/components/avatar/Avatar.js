import styledMap from 'styled-map'
import tw, {styled} from 'twin.macro'

const AvatarImg = styled.img`
  ${tw`inline-block h-10 w-10 rounded-full`}
  ${styledMap('size', {
    sm: tw`w-6 h-6`,
    lg: tw`w-16 h-16`,
    default: tw`w-10 h-10`,
  })}
`

const Avatar = ({ src, name, ...props }) => {
  return <AvatarImg src={src} alt={name} {...props} />
}

export default Avatar
