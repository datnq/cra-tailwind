import useUploader from './useUploader'

const Uploader = ({ uploadFn, children }) => {
  const { upload, queueId, currentUpload } = useUploader(uploadFn)
  return children({ currentUpload, upload, queueId })
}

export default Uploader
