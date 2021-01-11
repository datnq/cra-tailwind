import { IconBrandGithub } from '@tabler/icons'
import tw from 'twin.macro'
import useAPI from '../../api/useAPI'
import Button from '../button/Button'

const GithubLoginButton = ({ text = 'Login with Github' }) => {
  const { auth } = useAPI()
  const login = () => {
    auth.auth()
  }
  return (
    <Button
      css={tw`bg-github hover:bg-github hover:bg-opacity-90`}
      onPress={login}
    >
      <IconBrandGithub /> {text}
    </Button>
  )
}

export default GithubLoginButton
