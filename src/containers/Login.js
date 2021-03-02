import tw from 'twin.macro'
import Layout from '../layouts/BlankLayout'
import Logo from '../assets/img/Logo.svg'
import { AuthCodeForm, LoginForm } from '../components/loginForm'
import { useAtom } from 'jotai'
import { tokenAtom } from '../api/auth'

const Login = ({ authCode }) => {
  const [, setToken] = useAtom(tokenAtom)

  const handleToken = ({ token, user }) => {
    setToken(token)
  }

  return authCode ? (
    <AuthCodeForm onToken={handleToken} />
  ) : (
    <Layout>
      <main>
        <img src={Logo} tw='w-64 mx-auto mb-4' />
        <LoginForm />
      </main>
    </Layout>
  )
}
export default Login
