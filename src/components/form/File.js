import tw, { styled } from 'twin.macro'
import { forwardRef, useEffect, useLayoutEffect, useState } from 'react'
import { IconFolders, IconRefresh, IconX } from '@tabler/icons'
import { IconButton } from '../button'
import { useFirstMountState } from 'react-use'

const FileSelector = styled.label`
  ${tw`
    px-2 py-2 text-sm flex  flex-col items-center justify-center text-body
    bg-white self-stretch rounded-lg border-line border-2 border-dashed
    w-full h-40
    transition-colors
    hover:bg-gray-100
  `}
`

const File = forwardRef(({ children, onChange }, ref) => {
  const [file, setFile] = useState()

  const hasFile = !!file

  const change = e => {
    if (e.target?.files) setFile(e.target.files[0])
  }
  const clear = () => {
    setFile()
  }

  const firstMount = useFirstMountState()
  useEffect(() => {
    if (!firstMount) onChange && onChange(file)
  }, [file, firstMount, onChange])

  return (
    <div tw='relative max-w-xl'>
      {hasFile && (
        <IconButton type='button' onClick={clear} tw='absolute right-4 top-4'>
          <IconX size={16} />
        </IconButton>
      )}
      <FileSelector role='button' hasFile={hasFile}>
        {hasFile ? (
          <>
            <div tw='mb-4'>{file.name}</div>
            <div tw='flex items-center'>
              <IconRefresh tw='mr-2' size={16} /> <span>Change</span>
            </div>
          </>
        ) : (
          <>
            <div tw='mb-4'>{children}</div>
            <div tw='flex items-center'>
              <IconFolders tw='mr-2' /> <span>Browse&hellip;</span>
            </div>
          </>
        )}
        <input type='file' tw='hidden' onChange={change} ref={ref} />
      </FileSelector>
    </div>
  )
})
export default File
