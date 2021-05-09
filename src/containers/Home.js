import tw from 'twin.macro'
import Layout from '../layouts/DefaultLayout'
import { PageHeader } from '../components/layout'

const Home = ({ title }) => {
  return (
    <Layout>
      <PageHeader title={title} />
      <section tw='m-8 h-full'>
      
      </section>
    </Layout>
  )
}
export default Home
