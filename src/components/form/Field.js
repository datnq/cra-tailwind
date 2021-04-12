import tw from 'twin.macro'
import { forwardRef } from 'react'
import Input from './Input'
import { Controller } from 'react-hook-form'

const Field = forwardRef(
  (
    { label, controlId, component: Component = Input, control, name, ...props },
    ref,
  ) => {
    return (
      <div tw='my-6 flex flex-col'>
        {label && (
          <label tw='text-sm mb-2 font-bold text-gray-500' htmlFor={controlId}>
            {label}
          </label>
        )}
        <div>
          {control ? (
            <Controller
              control={control}
              name={name}
              render={({ field }) => {
                return <Component {...field} {...props} />
              }}
            />
          ) : (
            <Component id={controlId} name={name} {...props} ref={ref} />
          )}
        </div>
      </div>
    )
  },
)

export default Field
