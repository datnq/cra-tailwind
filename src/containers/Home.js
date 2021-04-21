import tw from 'twin.macro'
import Layout from '../layouts/DefaultLayout'
import useAPI from '../api/useAPI'
import { useQuery } from 'react-query'
import Table, { Column } from '../components/table'
import Link from '../components/link'
import toast from 'react-hot-toast'
import { useEffect } from 'react'
import { PageHeader } from '../components/layout'

const Home = () => {
  const { sample } = useAPI()

  const { data } = useQuery('users', sample.get)

  useEffect(() => {
    setTimeout(() => {
      toast('Beautiful UI components by the creators of Tailwind CSS')
    }, 2000)
  }, [])

  return (
    <Layout>
      <PageHeader title='Home Page' />
      <section tw='mx-8 h-full'>
        <Table
          data={data}
          rowKey='id'
          selectable
          stickyHeader
        >
          <Column dataKey='name' header='Name' sortable />
          <Column dataKey='email' header='Email'>
            {data => <Link href={`mailto:${data.value}`}>{data.value}</Link>}
          </Column>
          <Column dataKey='company.name' header='Company Name' />
        </Table>
      </section>
    </Layout>
  )
}
export default Home
