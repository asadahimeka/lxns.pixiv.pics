import axios from 'axios'

const request = axios.create({
  baseURL: 'https://hibiapi.cocomi.eu.org/api/pixiv',
  timeout: 20000,
  headers: { 'Content-Type': 'application/json' },
})

request.interceptors.request.use(config => {
  return config
})

request.interceptors.response.use(
  res => {
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
