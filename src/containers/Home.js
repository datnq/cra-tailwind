import tw from 'twin.macro'
import Button from '../components/button/Button'
import H1 from '../components/typography/H1'
import Layout from '../layouts/DefaultLayout'

const Card = tw.article`
  rounded 
  p-4
  bg-blue-700 text-white
`

const CardHeader = tw.header`
  text-lg
  font-bold
`

const CardContent = tw.section`
  py-3
`

const CardFooter = tw.footer``

const CardAction = tw(Button)`
  bg-white text-blue-700
  hover:bg-white hover:text-blue-700 hover:opacity-90
`

const Home = () => {
  return (
    <Layout>
      <H1>Create your applications</H1>
      <div className='grid grid-cols-4 gap-4'>
        <Card>
          <CardHeader>Jira</CardHeader>
          <CardContent>
            <p>Pull issues from Jira</p>
          </CardContent>
          <CardFooter>
            <CardAction onPress={console.log}>Login to Jira</CardAction>
          </CardFooter>
        </Card>
        <Card>Github</Card>
      </div>
    </Layout>
  )
}
export default Home
