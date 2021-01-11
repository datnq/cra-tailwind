import axios from 'axios'
import githubAPI from './github'

const useAPI = () => {
  return {
    auth: githubAPI(axios),
  }
}
export default useAPI
