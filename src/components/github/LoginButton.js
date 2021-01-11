import tw from 'twin.macro'
import Button from '../button/Button'

const GithubLoginButton = ({ text = 'Login with Github' }) => {
  const login = () => {
    log
  }
  return (
    <Button
      css={tw`bg-github hover:bg-github hover:bg-opacity-90`}
      onPress={login}
    >
      {text}
    </Button>
  )
}

export default GithubLoginButton
