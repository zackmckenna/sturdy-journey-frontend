import axios from 'axios'
const baseUrl = '/api/airtable'

const getAllRoleCards = () => {
  console.log('request made to airtable')
  const request = axios.get(baseUrl + '/rolecards')
  return request.then(response => response.data)
}

const getAllItemCards = () => {
  const request = axios.get(baseUrl + '/itemcards')
  return request.then(response => response.data)
}

const getAllEventCards = () => {
  const request = axios.get(baseUrl + '/eventcards')
  return request.then(response => response.data)
}


// const update = (id, newObject) => {
//   const request = axios.put(`${ baseUrl } /${id}`, newObject)
//   return request.then(response => response.data)
// }

export default { getAllRoleCards, getAllEventCards, getAllItemCards }
