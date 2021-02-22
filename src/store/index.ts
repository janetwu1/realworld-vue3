import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { User } from '@/api/user'

// 定义State类型
export interface State {
  count: number;
  user: User | null;
}

// 定义注入的key
export const key: InjectionKey<Store<State>> = Symbol('vuestorekey')

// 创建store容器
export const store = createStore<State>({
  state: { // 必须符合泛型参数State类型要求
    count: 0,
    user: JSON.parse(window.localStorage.getItem('user') || 'null')
  },

  mutations: {
    setUser (state, user: User) {
      state.user = user
      // 持久化到本地存储
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
