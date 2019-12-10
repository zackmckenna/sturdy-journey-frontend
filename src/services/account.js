import axios from 'axios'
const baseUrl = '/api/users'

const createAccount = async credentials => {
  try {
    const response = await axios.post(baseUrl, credentials)
    return response.data
  } catch(exception){
    return exception
  }
}

export default { createAccount }
