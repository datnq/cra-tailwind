import tw from 'twin.macro'
import { useLabel } from 'react-aria'
import { useForm } from 'react-form'
import { Inline } from '../layout'
import { Input } from '../form'
import Button from '../button'
import { IconBrandGithub } from '@tabler/icons'
import { Link } from '../link'
import H1 from '../typography/H1'

const instructionLink =
  'https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token'

const GetTokenForm = ({ onToken }) => {
  const { Form } = useForm({
    onSubmit: values => {
      onToken(values.token)
    },
  })
  const { fieldProps } = useLabel({
    label: 'token',
  })
  return (
    <Form>
      <header tw='text-center mb-8'>
        <H1 tw='mb-0'>Connect to Github using Personal Token</H1>
      </header>
      <Inline tw='justify-center'>
        <Input
          field='token'
          placeholder='Your Github Personal Token'
          tw='w-60'
          {...fieldProps}
        />
        <Button type='submit' tw='bg-github'>
          <IconBrandGithub /> Connect
        </Button>
      </Inline>
      <footer tw='text-center mt-8'>
        Don't know how to get Personal Token?{' '}
        <Link target='_blank' href={instructionLink}>
          View instruction
        </Link>
        {'.'}
      </footer>
    </Form>
  )
}

export default GetTokenForm
