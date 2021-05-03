import tw from 'twin.macro'
import { useState } from 'react'
import { useQuery } from 'react-query'
import useAPI from '../api/useAPI'
import Layout from '../layouts/DefaultLayout'
import { PageHeader } from '../components/layout'
import Link from '../components/link'
import Table, { Column } from '../components/table'
import {
  useSelectionActions,
  SelectionColumn,
} from '../components/table-plugins/selection'
import {
  SortableColumn,
  useSortableActions,
} from '../components/table-plugins/sortable'

const Home = ({ title }) => {
  const { sample } = useAPI()

  const { data } = useQuery('users', sample.get)

  const [state, setState] = useState({
    selected: ['1'],
  })

  const tablePlugins = { useSelectionActions, useSortableActions }

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
          plugins={tablePlugins}
        >
          <SelectionColumn dataKey='id' />
          <SortableColumn dataKey='name' headerLabel='Name' />
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
