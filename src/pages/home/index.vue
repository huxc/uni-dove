<route type="home">
{
    "style": {
        "navigationStyle":"custom",
        "navigationBarTitleText": "首页"
    }
}
</route>

<template>
  <view v-if="isInit" w-100vw h-100vh>
    <wd-navbar title="标题" :fixed="true" placeholder safe-area-inset-top />
    <Home v-if="tabbar === 'home'" />
    <List v-if="tabbar === 'list'" />
    <User v-if="tabbar === 'user'" />
    <wd-tabbar v-model="tabbar" custom-class="cus-tabbar" :fixed="true" placeholder safe-area-inset-bottom>
      <wd-tabbar-item name="home" title="首页" icon="home" />
      <wd-tabbar-item name="list" title="列表" icon="chart" />
      <wd-tabbar-item name="user" title="我的" icon="user" />
    </wd-tabbar>
  </view>
</template>

<script lang="ts" setup>
import Home from './components/home/index.vue'
import List from './components/list/index.vue'
import User from './components/user/index.vue'
import store from '@/store'

const tabbar = ref<string>('home')
const isInit = ref<boolean>(true)

onMounted(() => {
//   if (store.userStore?.getToken) {
//     isInit.value = true
//   }
//   else {
//     store.userStore.logIn({
//       username: 'admin',
//       password: '123456',
//     }).then(() => {
//       isInit.value = true
//     })
//   }
})
</script>

<style scoped lang="scss">
:deep(.cus-tabbar) {
  font-size: 50rpx !important;
}
</style>
