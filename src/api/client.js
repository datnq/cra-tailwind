import axios from 'axios'
import config from '../config'

axios.defaults.baseURL = config.weather.apiPrefix
axios.defaults.params = { appid: config.weather.apiKey }
axios.defaults.headers['content-type'] = 'application/json'
axios.defaults.headers['accept'] = 'application/json'

axios.interceptors.response.use(response => response.data)

export default axios
