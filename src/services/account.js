import axios from 'axios'
const baseUrl = '/api/users'

const createAccount = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { createAccount }
