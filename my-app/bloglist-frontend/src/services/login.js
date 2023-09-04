import axios from 'axios'
import REACT_APP_BACKEND_URL from '../util/config'
const baseUrl = `${REACT_APP_BACKEND_URL}/api/login`
const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }