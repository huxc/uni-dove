interface StorageItem<T> {
  value: T
  expiry: number
}
/**
 * 封装uni的StorageSync，
 * 设置带过期时间的本地缓存
 */
const StorageWithExpiry = {
  /**
   * 编辑
   */
  set<T>(key: string, value: T, expiryInHours: number): void {
    const now = Date.now()
    const item: StorageItem<T> = {
      value,
      expiry: now + expiryInHours * 3600 * 1000, // 以小时为单位
    }
    uni.setStorageSync(key, JSON.stringify(item))
  },
  /**
   * 获取
   */
  get<T>(key: string): T | null {
    const itemStr = uni.getStorageSync(key)
    if (!itemStr) {
      return null
    }
    try {
      const item: StorageItem<T> = JSON.parse(itemStr)
      const now = Date.now()
      console.log('🚀 ~ now > item.expiry:', now > item.expiry, key)
      if (now > item.expiry) {
        uni.removeStorageSync(key)
        return null
      }
      return item.value
    }
    catch (e) {
      // 如果解析出错，返回null
      return null
    }
  },
  /**
   * 删除
   */
  remove(key: string): void {
    uni.removeStorageSync(key)
  },
}

export default StorageWithExpiry
