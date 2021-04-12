import tw from 'twin.macro'
import Centerized from '../components/centerized'
import Checkbox from '../components/form/Checkbox'
import Radio from '../components/form/Radio'
import Input from '../components/form/Input'
import { Select } from '../components/form/Select'
import Layout from '../layouts/DefaultLayout'
import Datepicker from '../components/form/Datepicker'

const Home = () => {
  const options = [
    { key: 1, value: 1, text: 'Value 1' },
    { key: 2, value: 2, text: 'Value 2' },
  ]
  return (
    <Layout title='Doing Now'>
      <Centerized>
        <form>
          <div tw='my-4'>
            <Input />
          </div>
          <div tw='my-4'>
            <Datepicker />
          </div>
          <div tw='my-4'>
            <Checkbox>Select me</Checkbox>
          </div>
          <div tw='my-4'>
            <Radio name='radio'>Select me</Radio>
            <Radio name='radio' defaultChecked>
              Select me
            </Radio>
          </div>
          <div tw='my-4'>
            <Select name='select' options={options} />
          </div>
        </form>
      </Centerized>
    </Layout>
  )
}
export default Home
