import axios from 'axios'
const baseUrl = '/api/airtable'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

// const update = (id, newObject) => {
//   const request = axios.put(`${ baseUrl } /${id}`, newObject)
//   return request.then(response => response.data)
// }

export default { getAll }
