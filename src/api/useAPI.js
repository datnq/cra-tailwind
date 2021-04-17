import client from './client'
import sampleAPI from './sample'

const useAPI = () => {
  return {
    sample: sampleAPI(client)
  }
}
export default useAPI
