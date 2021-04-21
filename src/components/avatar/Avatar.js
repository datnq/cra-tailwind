import tw from 'twin.macro'

const AvatarImg = tw.img`inline-block h-10 w-10 rounded-full border-2 border-white`

const Avatar = ({ src, name, ...props }) => {
  return <AvatarImg src={src} alt={name} {...props} />
}

export default Avatar
