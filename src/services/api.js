import axios from 'axios'

const api = axios.create({
  baseURL: 'https://5f993a3050d84900163b845a.mockapi.io/eriks/products/all'
})

export default api;