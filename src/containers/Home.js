import Button from '../components/button/Button'
import Checkbox from '../components/form/Checkbox'
import Layout from '../layouts/DefaultLayout'

const Home = () => {
  return (
    <Layout>
      <div>
        <Button>Button</Button>
      </div>
      <div>
        <Checkbox>Checkbox</Checkbox>
      </div>
    </Layout>
  )
}
export default Home
