// 用于存储进行中的请求的唯一标识
export const pendingRequests = new Map<string, string>()

/**
 * 生成请求的唯一标识
 */
export function getRequestKey(config: any): string {
  const { method, url, data, params } = config
  return `${method} ${url} ${JSON.stringify(data || params)}`
}

let isLoading: boolean = false
/**
 * 显示全局加载状态
 */
export function showLoading() {
  if (!isLoading) {
    isLoading = true
    uni.showLoading({ title: '加载中...' })
  }
}

/**
 * 隐藏全局加载状态
 */
export function hideLoading() {
  if (isLoading) {
    isLoading = false
    uni.hideLoading()
  }
}
