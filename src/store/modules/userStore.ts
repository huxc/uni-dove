import { defineStore } from 'pinia'
import storeWithExpiry from '@/utils/storage'

/**
 * 使用setup模式定义
 */
function storeSetup() {
  const authCodes = ref<string[] | null>(null) // 所有按钮权限码

  const state = reactive<any>({
    access_token: '',
  })

  const getToken = computed<string>(() => `${state.access_token}`)

  /**
   * 刷新用户信息
   */
  const refToken = (data: object) => {
    Object.assign(state, data)
  }

  /**
   * 清空登录信息state
   */
  const clearState = () => {
    Object.keys(state).forEach((key) => {
      delete state[key]
    })
  }

  /**
   * 清空state
   */
  const clearAll = () => {
    state.access_token = null
    authCodes.value = null
  }

  /**
   * 登录
   */
  const logIn = (loginForm: loginDto): Promise<ApiRes<UserDto>> => {
    return new Promise((resolve, reject) => {
      api_user_login(loginForm)
        .then(({ data }: any) => {
          refToken(data)
          resolve(data)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  /**
   * 登出
   */
  const loginOut = () => {
    clearState()
  }

  return {
    logIn,
    state,
    authCodes,
    getToken,
    refToken,
    loginOut,
    clearState,
    clearAll,
  }
}

export const useUserStore = defineStore('userStore', storeSetup, {
  persist: {
    storage: {
      /**
       * 获取缓存
       */
      getItem: key => storeWithExpiry.get(key),
      /**
       * 设置过期缓存
       * 默认1小时过期时间,如需修改请设置env/.env/VITE_ACCESS_TOKEN_EXPTIME的值
       */
      setItem: (key, value) => storeWithExpiry.set(key, value, import.meta.env.VITE_ACCESS_TOKEN_EXPTIME),
    },
  },
})
