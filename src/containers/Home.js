import H1 from '../components/typography/H1'
import Layout from '../layouts/DefaultLayout'
import { Card, CardContent, CardFooter, CardHeader } from '../components/card'
import { Section } from '../components/layout'
import GithubLoginButton from '../components/github/LoginButton'

const Home = () => {
  return (
    <Layout>
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
    </Layout>
  )
}
export default Home
