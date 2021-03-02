import { useState } from 'react'
import tw from 'twin.macro'
import { useForm } from 'react-hook-form'
import Lockr from 'lockr'
import Button from '../button'
import { Input } from '../form'
import { Inline } from '../layout'
import { requestLogin } from '../../api/firebase'
import { Link } from '../link'

const LoginForm = ({ onRequestSent }) => {
  const { register, handleSubmit } = useForm()
  const [signinEmail, setSigninEmail] = useState(Lockr.get('email_to_signin'))

  const sendLogin = email =>
    requestLogin(email).then(() => {
      setSigninEmail(email)
      onRequestSent && onRequestSent(email)
    })

  const onSubmit = values => {
    sendLogin(values.email)
  }
  const onResend = () => {
    sendLogin(signinEmail)
  }

  return !signinEmail ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Inline>
        <Input
          name='email'
          placeholder='youremail@watasolutions.com'
          tw='w-64'
          ref={register}
        />
        <Button type='submit'>Send login request</Button>
      </Inline>
    </form>
  ) : (
    <div tw='text-center'>
      <p tw='mb-4'>
        A link has been sent to <strong>{signinEmail}</strong>. Please check
        your Inbox and follow instructions.
      </p>
      <p tw='mb-4'>
        Didn't receive email? <Link onClick={onResend}>Resend</Link>
      </p>
    </div>
  )
}

export default LoginForm
