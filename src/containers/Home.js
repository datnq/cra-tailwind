import tw from 'twin.macro'
import { useForm } from 'react-hook-form'
import Centerized from '../components/centerized'
import Layout from '../layouts/DefaultLayout'
import {
  Checkbox,
  Datepicker,
  Field,
  RadioGroup,
  Select,
  Switch,
  Textarea,
} from '../components/form'
import Editor from '../components/editor'

const Home = () => {
  const options = [
    { key: 1, value: 1, text: 'Value 1' },
    { key: 2, value: 2, text: 'Value 2' },
  ]

  const { register, control, watch } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      text: 'Text value',
      textarea: 'hahhaah',
      datetime: new Date(),
      checkbox: true,
      radio: 1,
      select: 2,
      switch: true,
    },
  })

  const text = watch('text')

  return (
    <Layout title='Doing Now'>
      <Centerized>
        <form tw='w-96'>
          <Field
            label='Content'
            name='text'
            component={Editor}
            control={control}
          />
          <Field label='Text' {...register('text')} />
          <Field
            label='Textarea'
            component={Textarea}
            {...register('textarea')}
          />
          <Field
            label='Checkbox'
            component={Checkbox}
            {...register('checkbox')}
          >
            Check me
          </Field>
          <Field label='Switch' component={Switch} {...register('switch')}>
            On/Off
          </Field>
          <Field
            label='Select one'
            component={RadioGroup}
            options={options}
            {...register('radio')}
          />
          <Field
            label='Select'
            name='select'
            component={Select}
            options={options}
            control={control}
          />
          <Field
            label='Pick a date'
            name='datetime'
            component={Datepicker}
            control={control}
          />
        </form>
      </Centerized>
    </Layout>
  )
}
export default Home
