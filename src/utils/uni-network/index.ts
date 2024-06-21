import type { UnConfig, UnError, UnMethod, UnParams, UnResponse } from '@uni-helper/uni-network'
import { un } from '@uni-helper/uni-network'
import appStore from '../../store'
import { isObjEmpty } from '../../utils'
import refreshToken from './refresh'
import { getRequestKey, hideLoading, pendingRequests, showLoading } from './un-reuse'

const http = un.create({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  timeout: 6000,
})

http.interceptors.request.use(
  (config: UnConfig) => {
    //  method 统一大写
    config.method = (config?.method?.toUpperCase() || 'GET') as UnMethod

    // 取消重复请求
    const source = un.CancelToken.source()
    config.cancelToken = source.token
    const requestKey = getRequestKey(config)
    pendingRequests.has(requestKey)
      ? source.cancel()
      : pendingRequests.set(requestKey, `${Date.now()}-${Math.random()}`)

    if (import.meta.env.VITE_IS_MICRO_SERVICE) {
      // 微服务处理
      const domainList = import.meta.env.VITE_API_DOMAIN_JSON
      if (config.domain?.length && domainList[config.domain]) {
        config.baseUrl = domainList[config.domain]
      }
      else {
        source.cancel()
        throw new Error('微服务已开启，请检查接口定义参数是否存在domain属性值，以及值是否在环境变量文件中定义')
      }
    }

    // 开启微服务后 单个请求域名的自定义
    if (config.cusBaseUrl) {
      config.baseUrl = config.cusBaseUrl
      delete config.cusBaseUrl
    }

    // 赋值token
    config.headers ??= {}
    config.headers[import.meta.env.VITE_ACCESS_TOKEN_KEY] = appStore.userStore.getToken

    // 错误弹窗默认true
    config.isMsg ??= true

    // get请求将data参数赋值给params
    if (config.method === 'GET' && isObjEmpty(config.data)) {
      config.params = config.data as UnParams
      delete config.data
    }

    // 是否显示loading
    config.isLoading ??= import.meta.env.VITE_IS_LOADING
    if (config.isLoading) {
      showLoading()
    }

    return config
  },
  (error: UnError) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (response: UnResponse) => {
    // 请求完成后，从 pendingRequests 中删除
    const requestKey = getRequestKey(response.config)
    pendingRequests.delete(requestKey)

    if (pendingRequests.size === 0 && response.config?.isLoading) {
      hideLoading()
    }

    const res = response.data as ApiRes
    if (!res.success && response.config?.isMsg) {
      // 错误提醒
      uni.showToast({
        title: res.msg,
        duration: 2000,
      })
    }

    return res
  },
  (error) => {
    if (error.response?.config) {
      const requestKey = getRequestKey(error.response?.config)
      pendingRequests.delete(requestKey)
    }
    // 刷新token 重新发起请求
    if (error.response?.status === import.meta.env.VITE_ACCESS_TOKEN_EXP) {
      return refreshToken().then(() => http.request(error.response.config))
    }
    else {
      uni.hideLoading()
      return Promise.reject(error)
    }
  },
)
export default http
