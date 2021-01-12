import H1 from '../typography/H1'
import { Card, CardContent, CardFooter, CardHeader } from '../card'
import { Section } from '../layout'
import GithubLoginButton from '../github/LoginButton'

const LoginOptions = () => {
  return (
    <>
      <Section>
        <H1>Create your applications</H1>
      </Section>
      <Section>Choose your issues provider:</Section>
      <Section className='grid grid-cols-4 gap-4'>
        <Card>
          <CardHeader>Github</CardHeader>
          <CardContent>
            <p>Pull issues from Github</p>
          </CardContent>
          <CardFooter>
            <GithubLoginButton />
          </CardFooter>
        </Card>
      </Section>
    </>
  )
}
export default LoginOptions
