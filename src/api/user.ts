/**
 * 用户相关请求模块
 */

import request from '@/utils/request'
import qs from 'qs'

interface LoginInput {
  user: {
    email: string;
    password: string;
  };
}

interface RegisterInput {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export interface User {
  email: string;
  token: string;
  image: string;
  bio: string;
  username: string;
}

interface LoginPayload {
  user: User;
}
// export const login = (data: User) => {
//   return request({
//     method: 'POST',
//     // headers: { 'content-type': 'application/x-www-form-urlencoded' },
//     url: '/api/users/login',
//     // 如果data 是普通对象，则Content-Type是是application/json
//     // 如果data是qs.stringify转换之后的数据：key=value&key=value,则Contnent-type会被设置为application/x-www-form-urlencoded
//     // 如果data是FormData对象，则Content-Type是mutiipart/form-data
//     data: qs.stringify(data)// axios默认发送的是application/json格式的函数
//   })
// }
export const login = (data: LoginInput) => {
  return request.post<LoginPayload>('/api/users/login', data)
}

export const regieter = (data: RegisterInput) => {
  return request.post<LoginPayload>('/api/users', data)
}

// // 用户注册
// export const register = data => {
//   return request({
//     method: 'POST',
//     url: '/api/users',
//     data
//   })
// }
