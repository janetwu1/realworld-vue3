// src\utils\request.ts
import axios from 'axios'
import router from '@/router'
import { store } from '@/store'

export const request = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
})

// 请求拦截器
request.interceptors.request.use(config => {
  const user = store.state.user
  if (user) {
    config.headers.Authentication = `Token ${user.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})

export default request
