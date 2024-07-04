/* eslint-disable jsdoc/require-jsdoc */
import { un } from '@uni-helper/uni-network'
import type { UnError, UnResponse } from '@uni-helper/uni-network'
import store from '@/store'

// 当前是否在请求刷新 Token
let isRefreshing: boolean = false

// 将在请求刷新 Token 中的请求暂存起来，等刷新 Token 后再重新请求
let requestQueue: Array<{ resolve: () => void, reject: (error: any) => void }> = []

// 执行暂存起来的请求
function executeQueue(error?: any) {
  requestQueue.forEach((promise) => {
    if (error) {
      promise.reject(error)
    }
    else {
      promise.resolve()
    }
  })

  requestQueue = []
}

// 刷新 Token 请求处理，参数为刷新成功后的回调函数
function refreshToken(): Promise<void> {
  // 如果当前是在请求刷新 Token 中，则将期间的请求暂存起来
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      requestQueue.push({ resolve, reject })
    })
  }

  isRefreshing = true

  return new Promise((resolve, reject) => {
    // 刷新token
    un.post('/users/refresh', {
      refreshToken: store.userStore?.state?.refresh_token,
    }, {
      baseUrl: import.meta.env.VITE_API_BASE_URL,
    })
      .then(res => ((res.data as ApiRes).code === 200 ? res : Promise.reject(res)))
      .then((res: UnResponse) => {
        const result = res.data as ApiRes
        store.userStore.refToken(result.data)
        resolve()
        executeQueue(null)
      })
      .catch((err: UnError) => {
        reject(err)
        executeQueue(err || new Error('Refresh token error'))
      })
      .finally(() => {
        isRefreshing = false
      })
  })
}

export default refreshToken
