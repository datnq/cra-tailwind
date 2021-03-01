import tw from 'twin.macro'
import { useForm } from 'react-hook-form'
import Button from '../button'
import { Input } from '../form'
import { Inline } from '../layout'
import { requestLogin } from '../../api/firebase'

const LoginForm = ({ onLoggedIn }) => {
  const { register, handleSubmit } = useForm()

  const onSubmit = values => {
    requestLogin(values.email).then(result => {
      console.log(result)
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
