import tw from 'twin.macro'
import Layout from '../layouts/DefaultLayout'
import { PageHeader } from '../components/layout'
import AnimeList from '../components/anime-list/AnimeList'

const Home = ({ title }) => {
  return (
    <Layout>
      <PageHeader title={title} />
      <section tw='m-8 h-full'>
        <AnimeList />
      </section>
    </Layout>
  )
}
export default Home
