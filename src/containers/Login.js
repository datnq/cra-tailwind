import tw from 'twin.macro'
import { navigate } from '@reach/router'
import Layout from '../layouts/BlankLayout'
import Logo from '../assets/img/Logo.svg'
import { LoginForm } from '../components/loginForm'

const Login = () => {
  return (
    <Layout>
      <main>
        <img src={Logo} tw='w-64 mx-auto mb-4' />
        <LoginForm
          onLoggedIn={() => {
            navigate('/home')
          }}
        />
      </main>
    </Layout>
  )
}
export default Login
