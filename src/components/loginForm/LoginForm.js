import { useLabel } from 'react-aria'
import { useForm } from 'react-form'
import tw from 'twin.macro'
import Button from '../button'
import { Input } from '../form'
import { Inline } from '../layout'

const LoginForm = ({ onLoggedIn }) => {
  const { Form } = useForm({
    onSubmit: () => {
      onLoggedIn()
    },
  })
  const { fieldProps } = useLabel({
    label: 'email',
  })

  return (
    <Form>
      <Inline>
        <Input
          field='email'
          placeholder='youremail@watasolutions.com'
          {...fieldProps}
          tw='w-64'
        />
        <Button type='submit'>Send login request</Button>
      </Inline>
    </Form>
  )
}

export default LoginForm
