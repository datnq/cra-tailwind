import tw from 'twin.macro'
import Layout from '../layouts/DefaultLayout'
import useAPI from '../api/useAPI'
import { useQuery } from 'react-query'
import Table, { Column, SelectionColumn } from '../components/table'
import Link from '../components/link'
import { PageHeader } from '../components/layout'
import { useState } from 'react'

const Home = ({ title }) => {
  const { sample } = useAPI()

  const { data } = useQuery('users', sample.get)

  const [state, setState] = useState({
    selected: ['1'],
  })

  return (
    <Layout>
      <PageHeader title={title} />
      <section tw='mx-8 h-full'>
        <Table
          data={data}
          rowKey='id'
          stickyHeader
          initialState={state}
          onStateChange={setState}
        >
          <SelectionColumn dataKey='id' />
          <Column dataKey='id' header='ID' sortable />
          <Column dataKey='name' header='Name' sortable />
          <Column
            dataKey='email'
            header='Email'
            render={value => <Link href={`mailto:${value}`}>{value}</Link>}
          />
          <Column dataKey='company.name' header='Company Name' />
        </Table>
      </section>
    </Layout>
  )
}
export default Home
