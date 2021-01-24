import { useLabel } from 'react-aria'
import { useForm } from 'react-form'
import tw from 'twin.macro'
import Button from '../components/button'
import { Input, Field } from '../components/form'
import Layout from '../layouts/BlankLayout'
import Logo from '../assets/img/Logo.svg'

const Login = () => {
  const { Form } = useForm()
  const { labelProps, fieldProps } = useLabel({
    label: 'email',
  })

  return (
    <Layout>
      <Form>
        <img src={Logo} tw='w-48 mx-auto mb-4' />
        <section tw='bg-white p-8 rounded-md w-80 shadow-xl'>
          <Field>
            <label {...labelProps}>Enter your email to login</label>
            <Input field='email' {...fieldProps} />
          </Field>
          <Button css={tw`w-full`}>Send login request</Button>
        </section>
      </Form>
    </Layout>
  )
}
export default Login
