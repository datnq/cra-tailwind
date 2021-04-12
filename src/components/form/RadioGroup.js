import tw from 'twin.macro'
import { forwardRef } from 'react'
import Radio from './Radio'

const RadioGroup = forwardRef(({ options, defaultValue, ...props }, ref) => {
  return (
    <>
      {options.map(option => (
        <div tw='mb-2' key={option.key}>
          <Radio
            value={option.value}
            defaultChecked={defaultValue === option.value}
            {...props}
            ref={ref}
          >
            {option.text}
          </Radio>
        </div>
      ))}
    </>
  )
})

export default RadioGroup
