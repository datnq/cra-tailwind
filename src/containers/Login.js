import tw from 'twin.macro'
import Layout from '../layouts/BlankLayout'
import Logo from '../assets/img/Logo.svg'
import { LoginForm } from '../components/loginForm'
import { useState } from 'react'

const Login = () => {
  const [data, setData] = useState()

  return (
    <Layout>
      <main>
        <img src={Logo} tw='w-64 mx-auto mb-4' />
        {!data?.id ? (
          <LoginForm onLoggedIn={setData} />
        ) : (
          <div tw='text-center'>
            <p tw='mb-4'>
              A link has been sent to <strong>{email}</strong>. Please check
              your Inbox and follow instructions.
            </p>
            <p tw='mb-4'>
              Didn't receive email? <Link>Resend</Link>
            </p>
          </div>
        )}
      </main>
    </Layout>
  )
}
export default Login
