import axios from 'axios'
const baseUrl = '/api/socket'

const connect = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { connect }
