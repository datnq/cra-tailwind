import tw from 'twin.macro'
import Layout from '../layouts/DefaultLayout'
import { PageHeader } from '../components/layout'
import Uploader from '../components/uploader/Uploader'
import File from '../components/form/File'

const Home = ({ title }) => {
  return (
    <Layout>
      <PageHeader title={title} />
      <section tw='m-8 h-full'>
        <div tw='mb-8'>
          <Uploader uploadFn={console.log}>
            {({ currentUpload, upload, queueId }) => {
              return (
                <>
                  <File onChange={console.log}>Select File</File>
                </>
              )
            }}
          </Uploader>
        </div>
      </section>
    </Layout>
  )
}
export default Home
