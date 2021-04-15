import { forwardRef, useEffect, useRef } from 'react'
import MDEditor, { theme as defaultTheme } from 'rich-markdown-editor'
import tw, { styled, theme as twTheme } from 'twin.macro'
import colors from 'tailwindcss/colors'
import useDisableAutocompleteRef from '../../hooks/useDisableAutocompleteRef'

const EditorWrapper = styled.div`
  ${tw`prose cursor-text
    block px-8 py-6
    bg-white border rounded
    focus:outline-none focus:border-primary
  `}

  h1:first-child,
  p:first-child,
  p:first-of-type {
    ${tw`mt-0`}
  }
  p:last-child {
    ${tw`mb-0`}
  }
`

const theme = {
  ...defaultTheme,
  fontFamily: twTheme('fontFamily.sans'),
  text: colors.black,
}

const Editor = forwardRef(({ value, onChange, onBlur }, _) => {
  const ref = useRef()

  const contenteditable = ref.current?.element.querySelector(
    '[contenteditable]',
  )
  const disableAutocomplete = useDisableAutocompleteRef(contenteditable)

  return (
    <EditorWrapper>
      <MDEditor
        onFocus={disableAutocomplete}
        uploadImage={file => {
          console.log(file)
          return Promise.resolve(file)
        }}
        theme={theme}
        ref={ref}
        defaultValue={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </EditorWrapper>
  )
})

export default Editor
