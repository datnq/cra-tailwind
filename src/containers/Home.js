import tw from 'twin.macro'
import Centerized from '../components/centerized'
import Layout from '../layouts/DefaultLayout'
import useAPI from '../api/useAPI'
import { useQuery } from 'react-query'
import Table from '../components/table'
import { Column } from 'react-base-table'

const Home = () => {
  const { sample } = useAPI()

  const { data } = useQuery('users', sample.get)

  return (
    <Layout title='Doing Now'>
      <Table data={data} selectable>
        <Column key='name' dataKey='name' width={0} flexGrow={300} title='Name' />
        <Column key='dataKey' dataKey='email' width={0} flexGrow={300} title='Email' />
      </Table>
    </Layout>
  )
}
export default Home
