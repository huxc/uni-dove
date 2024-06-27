/**
 * 设置缓存并自动格式化 JSON 数据
 */
function setStorage(key: string, data: any) {
  try {
    uni.setStorageSync(key, JSON.stringify(data))
  }
  catch (error) {
    console.error('Error setting cache:', error)
  }
}

/**
 * 读取缓存并自动格式化 JSON 数据
 */
function getStorage(key: string) {
  try {
    const value = uni.getStorageSync(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  catch (error) {
    console.error('Error getting cache:', error)
  }
  return null
}

/**
 * 删除
 */
function removeStorage(key: string) {
  try {
    uni.removeStorageSync(key)
  }
  catch (error) {
    console.error('Error removing cache:', error)
  }
}

export {
  setStorage,
  getStorage,
  removeStorage,
}
