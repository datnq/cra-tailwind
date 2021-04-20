import tw from 'twin.macro'
import Layout from '../layouts/DefaultLayout'
import useAPI from '../api/useAPI'
import { useQuery } from 'react-query'
import Table, { Column } from '../components/table'
import { Link } from '../components/link'

const Home = () => {
  const { sample } = useAPI()

  const { data } = useQuery('users', sample.get)

  return (
    <Layout title='Doing Now'>
      <section tw='mx-8 h-full'>
        <Table
          data={data}
          rowKey='id'
          selectable
          defaultSort={['name']}
          stickyHeader
        >
          <Column dataKey='name' header='Name' sortable />
          <Column dataKey='email' header='Email'>
            {data => <Link href={`mailto:${data.value}`}>{data.value}</Link>}
          </Column>
        </Table>
      </section>
    </Layout>
  )
}
export default Home
