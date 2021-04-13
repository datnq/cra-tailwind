import { forwardRef } from 'react'
import MDEditor from 'rich-markdown-editor'
import tw from 'twin.macro'

const EditorWrapper = tw.div`
  prose cursor-text
  block px-8
  bg-white border rounded
  focus:outline-none focus:border-primary
`

const Editor = forwardRef(({ value, onChange }, _) => {
  return (
    <EditorWrapper>
      <MDEditor defaultValue={value} onChange={onChange} />
    </EditorWrapper>
  )
})

export default Editor
