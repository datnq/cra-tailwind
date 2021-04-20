import tw, { styled } from 'twin.macro'
import { forwardRef } from 'react'
import Input from './Input'
import { Controller } from 'react-hook-form'
import useFieldId from '../../hooks/useFieldId'

const FieldControl = styled.div`
  & > input,
  & > textarea {
    ${tw`w-full`}
  }
`

const Field = forwardRef(
  (
    {
      label,
      controlId,
      error,
      errorMessage,
      component: Component = Input,
      control,
      name,
      ...props
    },
    ref,
  ) => {
    const id = useFieldId(controlId)
    return (
      <div tw='my-6 flex flex-col'>
        {label && (
          <label tw='text-sm mb-2 font-bold text-gray-500' htmlFor={id}>
            {label}
          </label>
        )}
        <FieldControl>
          {control ? (
            <Controller
              control={control}
              name={name}
              render={({ field }) => {
                return <Component id={id} {...field} {...props} />
              }}
            />
          ) : (
            <Component id={id} name={name} {...props} ref={ref} />
          )}
        </FieldControl>
        {error && <p tw='text-sm text-negative'>{errorMessage}</p>}
      </div>
    )
  },
)

export default Field
