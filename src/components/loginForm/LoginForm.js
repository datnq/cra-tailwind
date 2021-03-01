import tw from 'twin.macro'
import { useAtom } from 'jotai'
import { useForm } from 'react-hook-form'
import { loginAtom } from '../../api/auth'
import Button from '../button'
import { Input } from '../form'
import { Inline } from '../layout'

const LoginForm = ({ onLoggedIn }) => {
  const { register, handleSubmit } = useForm()
  const [login] = useAtom(loginAtom)

  const onSubmit = values => {
    login(values.email).then(result => {
      const { Id: id, email } = result
      onLoggedIn && onLoggedIn({ id, email })
    })
  }

  return (
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
  )
}

export default LoginForm
