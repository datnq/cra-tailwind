import { nanoid } from 'nanoid'
import { useContext, useEffect, useMemo, useRef } from 'react'
import { AppContext } from '../app/AppProvider'
import { uploadStatus } from './uploadStatus'

const useUploader = uploadFn => {
  const { uploadQueue, setUploadQueue } = useContext(AppContext)

  const queueId = useRef()
  useEffect(() => {
    if (!queueId.current) {
      queueId.current = nanoid()
    }
  }, [])

  const currentUpload = useMemo(() => uploadQueue[queueId.current], [
    uploadQueue,
  ])

  const config = {
    onUploadProgress: event => {
      if (!queueId.current) return
      const progress = Math.round((event.loaded * 100) / event.total)
      currentUpload.progress = progress
      if (progress === 100) {
        currentUpload.status = uploadStatus.COMPLETED
      }
      setUploadQueue(currentUpload)
    },
  }

  const upload = file => {
    if (!queueId.current) return
    const item = {
      queueId: queueId.current,
      file,
      uploadFn: uploadFn.bind(null, config),
      status: uploadStatus.QUEUED,
    }
    setUploadQueue({ ...uploadQueue, [queueId.current]: item })
  }

  return { queueId, upload, currentUpload }
}

export default useUploader

/*

CONCEPT

// Upload Component
const { user } = useApi()
const { queueId, status, upload } = useUploader(user.uploadAvatar)

const [file, setFile] = useState()

const selectFile = (e) => {
  const file = e.target.files[0]
  setFile(file)
}

const dataURL = useMemo((file) => {
  if (file) return toDataURL(file)
}, [file])

const doupload = () => {
  upload(file)
}

return (
  <>
    {dataURL && <img src={dataURL} />}
    <File onChange={selectFile} />
    <Button onClick={doupload}></Button>
  </>
)

*/
