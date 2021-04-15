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
import { useDialog } from '../components/modal/useDialog'
import Button from '../components/button'

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
      datetime: new Date(),
      checkbox: true,
      radio: 1,
      select: 2,
      switch: true,
    },
  })

  const { confirm } = useDialog()

  const open = async () => {
    const value = await confirm(
      'Your payment has been successfully submitted. We’ve sent your an email with all of the details of your order.',
      {
        variant: 'danger',
        title: 'Payment successful',
        okLabel: 'Yes',
        cancelLabel: 'No'
      },
    )
    console.log('Clicked!', value)
  }

  return (
    <Layout title='Doing Now'>
      <Centerized>
        <div tw='my-8'>
          <Button onClick={open}>Open dialog</Button>
        </div>
        <form tw='w-96'>
          <Field
            label='Content'
            name='text'
            component={Editor}
            control={control}
          />
          <Field label='Text' {...register('text')} />
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
