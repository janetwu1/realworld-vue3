<!-- src\views\login\index.vue -->
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <!-- <a href="">Have an account?</a> -->
            <router-link to="/rigister">Have an account?</router-link>
          </p>

          <ul class="error-messages">
            <li>That email is already taken</li>
          </ul>

          <form @submit.prevent="handleSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import { defineComponent, reactive } from 'vue'
import { login, regieter } from '@/api/user'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
// import { useStore } from 'vuex';
// import { key } from '@/store'
const useLogin = () => {
  const router = useRouter()
  const store = useStore()
  const user = reactive({ // 支持类型推断
    email: 'lpzmail@163.com',
    password: '12345678'
  })

  const handleSubmit = async () => {
    try {
      const isLogin = this.isLogin
      const { data } = isLogin
        ? await login({ user })
        : await regieter({ user })
      store.commit('setUser', data.user)
      console.log(data)
      // 跳转到首页
      router.push({
        name: 'home'
      })
    } catch (err) {
      console.log('登录失败', err)
    }
  }

  // 返回的内容可以在模板中绑定使用
  return {
    user,
    handleSubmit
  }
}

export default defineComponent({
  name: 'loginINdex',
  computed: {
    isLogin () {
      return this.$route.name === 'login'
    }
  },
  setup () {
    return { ...useLogin() }
  }
})
</script>
