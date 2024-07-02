<template>
  <view>
    <view>姓名：{{ userInfo.name }}</view>
    <view>年龄：{{ userInfo.age }}</view>
    <view>注册时间：{{ userInfo.created_at }}</view>
  </view>
</template>

<script setup>
import { getStorage, setStorage } from '@/utils/cache'

const userInfo = reactive({})

onMounted(() => {
  // 读取缓存
  const userCache = getStorage('about')
  if (userCache) {
    // 存在即赋值
    Object.assign(userInfo, userCache)
  }
  // 接口请求
  api_user_getCustomerById(2, { isLoading: false }).then((res) => {
    Object.assign(userInfo, res.data)
    // 设置缓存
    setStorage('about', res.data)
  })
})
</script>

<style scoped></style>
