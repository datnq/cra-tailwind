import { Suspense } from 'react'
import Centerized from '../components/centerized'
import { CurrentTask } from '../components/task'
import Layout from '../layouts/DefaultLayout'

const Home = () => {
  return (
    <Layout title='Doing Now'>
      <Centerized>
        <Suspense fallback={<span>Loading current task...</span>}>
          <CurrentTask />
        </Suspense>
      </Centerized>
    </Layout>
  )
}
export default Home
