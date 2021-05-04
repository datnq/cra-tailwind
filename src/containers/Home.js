import tw from 'twin.macro'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import useAPI from '../api/useAPI'
import Layout from '../layouts/DefaultLayout'
import { PageHeader } from '../components/layout'
import Link from '../components/link'
import Table, { Column } from '../components/table'
import { SelectionColumn } from '../components/table-plugins/selection'
import { SortableColumn } from '../components/table-plugins/sortable'
import { useDialog } from '../components/modal'
import Button from '../components/button'
import toast from 'react-hot-toast'

const Home = ({ title }) => {
  const { sample } = useAPI()

  const { confirm } = useDialog()

  const { data } = useQuery('users', sample.get)

  const [state, setState] = useState({
    selected: ['1'],
  })

  const dialog = async () => {
    const result = await confirm(
      'This confirmation message open after page rendered.',
      {
        title: 'Are you done yet?',
        variant: 'success',
      },
    )
    toast('You clicked ' + (result ? 'OK' : 'Cancel'), {
      type: result ? 'success' : 'error',
    })
  }

  const openToast = () => {
    toast('You opened a toast')
  }

  return (
    <Layout>
      <PageHeader title={title} />
      <section tw='m-8 h-full'>
        <div tw='mb-8'>
          <Button type='button' onClick={dialog}>
            Sample Dialog
          </Button>
          <Button type='button' onClick={openToast}>
            Sample Toast
          </Button>
        </div>
        <Table
          data={data}
          rowKey='id'
          stickyHeader
          initialState={state}
          onStateChange={setState}
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
